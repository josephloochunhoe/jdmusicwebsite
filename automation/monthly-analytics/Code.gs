const CONFIG = Object.freeze({
  timeZone: 'Asia/Kuala_Lumpur',
  siteHost: 'jd-musicacademy.com',
  triggerHour: 20,
  reportName: 'JD.Music Website Analytics',
});

const TRIGGER_HANDLER = 'sendMonthlyAnalyticsEmailIfDue';
const LAST_SENT_KEY = 'monthlyAnalyticsLastSent';
const PROPERTY_ID_KEY = 'GA4_PROPERTY_ID';
const RECIPIENT_KEY = 'REPORT_RECIPIENT_EMAIL';

/**
 * Run once after copying this project into Google Apps Script.
 * It validates GA4 access and installs one daily trigger. The handler only
 * sends on the last calendar day in Malaysia, so February is covered too.
 */
function installMonthlyAnalyticsEmail() {
  const privateConfig = getPrivateConfiguration_();
  validateConfiguration_(privateConfig);
  // Fail before installing a trigger if this account cannot read the property.
  runReport_({
    dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
    metrics: [{ name: 'totalUsers' }],
    limit: 1,
  }, privateConfig.propertyId);

  ScriptApp.getProjectTriggers()
    .filter((trigger) => trigger.getHandlerFunction() === TRIGGER_HANDLER)
    .forEach((trigger) => ScriptApp.deleteTrigger(trigger));

  ScriptApp.newTrigger(TRIGGER_HANDLER)
    .timeBased()
    .atHour(CONFIG.triggerHour)
    .everyDays(1)
    .create();

  console.log(
    'Installed. The report will be checked daily around %s:00 %s and sent only on the final day of each month.',
    CONFIG.triggerHour,
    CONFIG.timeZone,
  );
}

/** Sends a real report immediately, clearly marked as a test. */
function sendTestAnalyticsEmail() {
  const privateConfig = getPrivateConfiguration_();
  validateConfiguration_(privateConfig);
  sendAnalyticsEmail_(new Date(), true, privateConfig);
}

/** Daily trigger entry point. */
function sendMonthlyAnalyticsEmailIfDue() {
  sendMonthlyAnalyticsEmailIfDueAt_(new Date());
}

function sendMonthlyAnalyticsEmailIfDueAt_(now) {
  if (!isLastDayInTimeZone_(now)) return;

  const monthKey = Utilities.formatDate(now, CONFIG.timeZone, 'yyyy-MM');
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const properties = PropertiesService.getScriptProperties();
    if (properties.getProperty(LAST_SENT_KEY) === monthKey) return;
    const privateConfig = getPrivateConfiguration_();
    validateConfiguration_(privateConfig);
    sendAnalyticsEmail_(now, false, privateConfig);
    // Set only after MailApp succeeds, allowing the next daily retry on failure.
    properties.setProperty(LAST_SENT_KEY, monthKey);
  } finally {
    lock.releaseLock();
  }
}

function sendAnalyticsEmail_(now, isTest, privateConfig) {
  const range = reportRangeFor_(now);
  const summary = fetchSummary_(range, privateConfig.propertyId);
  const pages = fetchTopPages_(range, privateConfig.propertyId);
  const sources = fetchTopSources_(range, privateConfig.propertyId);
  const referrers = fetchExternalReferrers_(range, privateConfig.propertyId);
  const period = `${range.startDate} to ${range.endDate}`;
  const subject = `${isTest ? '[TEST] ' : ''}${CONFIG.reportName} — ${range.label}`;

  MailApp.sendEmail({
    to: privateConfig.recipient,
    subject,
    name: 'JD.Music Analytics',
    body: plainTextReport_(period, summary, pages, sources, referrers),
    htmlBody: htmlReport_(period, summary, pages, sources, referrers, isTest),
  });
}

function fetchSummary_(range, propertyId) {
  const response = runReport_({
    dateRanges: [dateRangeForApi_(range)],
    metrics: [
      { name: 'totalUsers' },
      { name: 'sessions' },
      { name: 'screenPageViews' },
    ],
  }, propertyId);
  const values = response.rows && response.rows[0]
    ? response.rows[0].metricValues.map((item) => Number(item.value || 0))
    : [0, 0, 0];
  return { visitors: values[0], sessions: values[1], views: values[2] };
}

function fetchTopPages_(range, propertyId) {
  return rowsFromReport_(runReport_({
    dateRanges: [dateRangeForApi_(range)],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'totalUsers' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 10,
  }, propertyId), ['page', 'views', 'visitors']);
}

function fetchTopSources_(range, propertyId) {
  return rowsFromReport_(runReport_({
    dateRanges: [dateRangeForApi_(range)],
    dimensions: [{ name: 'sessionSourceMedium' }],
    metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 10,
  }, propertyId), ['source', 'sessions', 'visitors']);
}

function fetchExternalReferrers_(range, propertyId) {
  const rows = rowsFromReport_(runReport_({
    dateRanges: [dateRangeForApi_(range)],
    dimensions: [{ name: 'pageReferrer' }],
    metrics: [{ name: 'screenPageViews' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 100,
  }, propertyId), ['referrer', 'views']);
  return rows.filter((row) => isExternalReferrer_(row.referrer)).slice(0, 10);
}

function runReport_(request, propertyId) {
  return AnalyticsData.Properties.runReport(
    request,
    `properties/${propertyId}`,
  );
}

function rowsFromReport_(response, keys) {
  return (response.rows || []).map((row) => {
    const values = [
      ...(row.dimensionValues || []).map((item) => item.value),
      ...(row.metricValues || []).map((item) => Number(item.value || 0)),
    ];
    return keys.reduce((result, key, index) => {
      result[key] = values[index];
      return result;
    }, {});
  });
}

function reportRangeFor_(now) {
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const endDate = Utilities.formatDate(yesterday, CONFIG.timeZone, 'yyyy-MM-dd');
  const startDate = `${endDate.slice(0, 8)}01`;
  return {
    startDate,
    endDate,
    label: Utilities.formatDate(yesterday, CONFIG.timeZone, 'MMMM yyyy'),
  };
}

function dateRangeForApi_(range) {
  return { startDate: range.startDate, endDate: range.endDate };
}

function isLastDayInTimeZone_(now) {
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  return Utilities.formatDate(now, CONFIG.timeZone, 'yyyy-MM') !==
    Utilities.formatDate(tomorrow, CONFIG.timeZone, 'yyyy-MM');
}

function isExternalReferrer_(value) {
  const match = String(value || '').match(/^https?:\/\/([^/]+)/i);
  if (!match) return false;
  const host = match[1].toLowerCase().replace(/^www\./, '').split(':')[0];
  return host !== CONFIG.siteHost;
}

function htmlReport_(period, summary, pages, sources, referrers, isTest) {
  const card = (label, value) =>
    `<td style="padding:16px;background:#f6f3f1;border-radius:10px;text-align:center">` +
    `<div style="font-size:24px;font-weight:700">${formatNumber_(value)}</div>` +
    `<div style="color:#666;font-size:12px">${label}</div></td>`;
  const table = (headers, rows) => {
    if (!rows.length) return '<p style="color:#666">No data available yet.</p>';
    const heading = headers.map((item) => `<th style="padding:8px;text-align:left;border-bottom:1px solid #ddd">${escapeHtml_(item)}</th>`).join('');
    const body = rows.map((row) => `<tr>${Object.values(row).map((value, index) =>
      `<td style="padding:8px;border-bottom:1px solid #eee;${index ? 'text-align:right' : ''}">${escapeHtml_(typeof value === 'number' ? formatNumber_(value) : value)}</td>`
    ).join('')}</tr>`).join('');
    return `<table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr>${heading}</tr></thead><tbody>${body}</tbody></table>`;
  };

  return `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#191919;max-width:720px;margin:auto;padding:24px">` +
    `${isTest ? '<p style="padding:10px;background:#fff3cd"><strong>Test email:</strong> the monthly schedule has not fired.</p>' : ''}` +
    `<h1 style="font-size:24px">JD.Music website analytics</h1><p style="color:#666">${escapeHtml_(period)} · Data through yesterday</p>` +
    `<table style="width:100%;border-spacing:8px"><tr>${card('Visitors', summary.visitors)}${card('Sessions', summary.sessions)}${card('Page views', summary.views)}</tr></table>` +
    `<h2 style="font-size:18px;margin-top:28px">Top pages</h2>${table(['Page', 'Views', 'Visitors'], pages)}` +
    `<h2 style="font-size:18px;margin-top:28px">Traffic sources</h2>${table(['Source / medium', 'Sessions', 'Visitors'], sources)}` +
    `<h2 style="font-size:18px;margin-top:28px">External referring pages</h2>${table(['Referrer', 'Views'], referrers)}` +
    `<p style="font-size:11px;color:#777;margin-top:28px">Google Analytics can take up to 72 hours to finish processing recent activity. Referring pages appear only when the visitor's browser provides them.</p>` +
    `</body></html>`;
}

function plainTextReport_(period, summary, pages, sources, referrers) {
  const list = (rows) => rows.length
    ? rows.map((row) => Object.values(row).join(' — ')).join('\n')
    : 'No data available yet.';
  return [
    `JD.Music website analytics (${period})`,
    `Visitors: ${formatNumber_(summary.visitors)}`,
    `Sessions: ${formatNumber_(summary.sessions)}`,
    `Page views: ${formatNumber_(summary.views)}`,
    '', 'Top pages', list(pages),
    '', 'Traffic sources', list(sources),
    '', 'External referring pages', list(referrers),
    '', 'Recent Google Analytics data may still be processing.',
  ].join('\n');
}

function formatNumber_(value) {
  return Number(value || 0).toLocaleString('en-MY');
}

function escapeHtml_(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function getPrivateConfiguration_() {
  const properties = PropertiesService.getScriptProperties();
  return {
    propertyId: properties.getProperty(PROPERTY_ID_KEY) || '',
    recipient: properties.getProperty(RECIPIENT_KEY) || '',
  };
}

function validateConfiguration_(privateConfig) {
  if (!/^\d+$/.test(privateConfig.propertyId)) {
    throw new Error(`Set a numeric ${PROPERTY_ID_KEY} in Apps Script Properties.`);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(privateConfig.recipient)) {
    throw new Error(`Set a valid ${RECIPIENT_KEY} in Apps Script Properties.`);
  }
  if (Session.getScriptTimeZone() !== CONFIG.timeZone) {
    throw new Error(`Set the Apps Script project time zone to ${CONFIG.timeZone}.`);
  }
}

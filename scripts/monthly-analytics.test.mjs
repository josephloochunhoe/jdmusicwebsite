import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile('automation/monthly-analytics/Code.gs', 'utf8');
const context = {
  Utilities: {
    formatDate(date, timeZone, pattern) {
      const options = pattern === 'MMMM yyyy'
        ? { timeZone, month: 'long', year: 'numeric' }
        : { timeZone, year: 'numeric', month: '2-digit', ...(pattern === 'yyyy-MM-dd' ? { day: '2-digit' } : {}) };
      const parts = new Intl.DateTimeFormat(pattern === 'MMMM yyyy' ? 'en-US' : 'en-CA', options).formatToParts(date);
      const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
      if (pattern === 'MMMM yyyy') return `${values.month} ${values.year}`;
      if (pattern === 'yyyy-MM') return `${values.year}-${values.month}`;
      return `${values.year}-${values.month}-${values.day}`;
    },
  },
};
vm.createContext(context);
vm.runInContext(`${source}\n;globalThis.__test = { isLastDayInTimeZone_, reportRangeFor_, dateRangeForApi_, isExternalReferrer_, escapeHtml_ };`, context);
const helpers = context.__test;

test('recognizes variable month endings in Malaysia', () => {
  assert.equal(helpers.isLastDayInTimeZone_(new Date('2026-09-30T12:00:00Z')), true);
  assert.equal(helpers.isLastDayInTimeZone_(new Date('2026-09-29T12:00:00Z')), false);
  assert.equal(helpers.isLastDayInTimeZone_(new Date('2028-02-29T12:00:00Z')), true);
});

test('reports month-to-yesterday, including correctly at a month boundary', () => {
  assert.deepEqual(
    JSON.parse(JSON.stringify(helpers.reportRangeFor_(new Date('2026-09-30T12:00:00Z')))),
    { startDate: '2026-09-01', endDate: '2026-09-29', label: 'September 2026' },
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(helpers.reportRangeFor_(new Date('2026-10-01T12:00:00Z')))),
    { startDate: '2026-09-01', endDate: '2026-09-30', label: 'September 2026' },
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(helpers.dateRangeForApi_({ startDate: '2026-09-01', endDate: '2026-09-29', label: 'September 2026' }))),
    { startDate: '2026-09-01', endDate: '2026-09-29' },
  );
});

test('keeps only external web referrers and safely escapes report values', () => {
  assert.equal(helpers.isExternalReferrer_('https://www.google.com/search?q=music'), true);
  assert.equal(helpers.isExternalReferrer_('https://www.jd-musicacademy.com/about'), false);
  assert.equal(helpers.isExternalReferrer_('javascript:alert(1)'), false);
  assert.equal(helpers.escapeHtml_('<script>"x" & y</script>'), '&lt;script&gt;&quot;x&quot; &amp; y&lt;/script&gt;');
});

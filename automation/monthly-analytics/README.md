# Monthly GA4 email

This Google Apps Script emails a JD.Music analytics summary on the last
calendar day of every month, including February. It includes visitors,
sessions, page views, top pages, traffic sources, and external referring pages.
The recipient and GA4 Property ID stay in private Apps Script properties, not
in this public repository.

The report covers the first day of the current month through yesterday. Google
Analytics can take up to 72 hours to finish processing recent events, so the
newest figures can still change.

## One-time activation

1. Sign in to the Google account that has access to the JD.Music GA4 property
   and create a project at https://script.google.com/.
2. Set the project time zone to **Asia/Kuala_Lumpur** in Project Settings.
3. Under **Script properties**, add `GA4_PROPERTY_ID` with the numeric GA4
   Property ID and `REPORT_RECIPIENT_EMAIL` with the destination email address.
4. Copy `Code.gs` into the editor. Enable **Show "appsscript.json" manifest file
   in editor** and replace the manifest with the included `appsscript.json`.
   If the Analytics Data service does not appear automatically, add
   **Google Analytics Data API** under **Services**.
5. Select `installMonthlyAnalyticsEmail` and click **Run**. Review and approve
   the requested Analytics read, email send, and trigger permissions. The
   script deletes and replaces only its own matching trigger.
6. Select `sendTestAnalyticsEmail` and click **Run**. Confirm that exactly one
   test email reaches the configured recipient and that the numbers render.
7. In **Triggers**, confirm one daily trigger exists for
   `sendMonthlyAnalyticsEmailIfDue`. It checks daily around 8 PM Malaysia time
   but sends only on the last day, with a stored month key preventing duplicate
   emails.

The email is sent by the Google account that authorizes the Apps Script; no
recipient address, property identifier, email password, API key, or
service-account key is stored in this repository.
To disable delivery, delete the trigger in the Apps Script project.

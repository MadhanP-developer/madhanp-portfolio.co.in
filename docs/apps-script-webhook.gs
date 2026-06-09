/**
 * Google Apps Script Web App — receives a contact-form lead, appends a row to
 * the bound Google Sheet, and emails a Gmail notification.
 *
 * SETUP
 * 1. Open your Google Sheet → Extensions → Apps Script.
 * 2. Paste this whole file (replace any default code).
 * 3. Set NOTIFY_EMAIL below to where you want notifications.
 * 4. Deploy → New deployment → type "Web app".
 *      - Execute as:  Me
 *      - Who has access:  Anyone
 *    Copy the /exec URL → that is SHEETS_WEBHOOK_URL.
 * 5. First deploy will ask you to authorize Sheets + Gmail access — approve it.
 */

var NOTIFY_EMAIL = "madhanp370@gmail.com";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    // Add a header row once if the sheet is empty.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Received At", "Name", "Email", "Phone", "Subject", "Message"]);
    }
    sheet.appendRow([
      data.receivedAt || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.subject || "",
      data.message || "",
    ]);

    var subject = "New portfolio lead: " + (data.name || "Unknown");
    var body =
      "Name: " + (data.name || "") + "\n" +
      "Email: " + (data.email || "") + "\n" +
      "Phone: " + (data.phone || "") + "\n" +
      "Subject: " + (data.subject || "") + "\n\n" +
      (data.message || "");
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: subject,
      body: body,
      replyTo: data.email || NOTIFY_EMAIL,
    });

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Google Apps Script for Contact Form Email Handler
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Update the RECIPIENT_EMAIL variable with your email address
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Execute as: "Me"
 * 8. Who has access: "Anyone"
 * 9. Click "Deploy" and copy the web app URL
 * 10. Paste the URL in Contact.jsx where it says 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'
 */

// ========================
// CONFIGURATION
// ========================

// Replace with your email address where you want to receive messages
const RECIPIENT_EMAIL = 'your-email@example.com';

// Email subject line
const EMAIL_SUBJECT = 'New Contact Form Submission - Sviesa Website';

// ========================
// MAIN FUNCTIONS
// ========================

/**
 * Handles POST requests from the contact form
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Extract form fields
    const name = data.name || 'Not provided';
    const email = data.email || 'Not provided';
    const message = data.message || 'Not provided';
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return createResponse(false, 'Missing required fields');
    }
    
    // Create email body
    const emailBody = createEmailBody(name, email, message);
    
    // Send email
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: EMAIL_SUBJECT,
      htmlBody: emailBody,
      replyTo: email
    });
    
    // Optional: Log submission to Google Sheet (see function below)
    // logToSheet(name, email, message);
    
    return createResponse(true, 'Message sent successfully');
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return createResponse(false, 'Error processing request: ' + error.toString());
  }
}

/**
 * Handles GET requests (for testing)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'success',
      message: 'Contact form API is running'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Creates HTML email body
 */
function createEmailBody(name, email, message) {
  const timestamp = new Date().toLocaleString('en-US', { 
    timeZone: 'Europe/Vilnius',
    dateStyle: 'full',
    timeStyle: 'long'
  });
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #8B0000, #DC143C);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background: #f9f9f9;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 0 0 8px 8px;
        }
        .field {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
          color: #8B0000;
          display: block;
          margin-bottom: 5px;
        }
        .value {
          background: white;
          padding: 10px;
          border-radius: 4px;
          border-left: 3px solid #DC143C;
        }
        .footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          font-size: 12px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">New Contact Form Submission</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Sviesa Photography Club</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">From:</span>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </div>
          
          <div class="field">
            <span class="label">Message:</span>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="footer">
            <strong>Submission Time:</strong> ${timestamp}<br>
            <small>This message was sent from the Sviesa website contact form.</small>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Creates standardized JSON response
 */
function createResponse(success, message) {
  const response = {
    status: success ? 'success' : 'error',
    message: message
  };
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * OPTIONAL: Log submissions to a Google Sheet
 * 
 * To use this feature:
 * 1. Create a new Google Sheet
 * 2. Get the sheet ID from the URL (the long string between /d/ and /edit)
 * 3. Replace 'YOUR_SHEET_ID_HERE' below
 * 4. Uncomment the logToSheet() call in doPost() function above
 */
function logToSheet(name, email, message) {
  try {
    const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Replace with your Google Sheet ID
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName('Contact Submissions') || ss.insertSheet('Contact Submissions');
    
    // Create header row if it doesn't exist
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }
    
    // Append new submission
    sheet.appendRow([
      new Date(),
      name,
      email,
      message
    ]);
    
    Logger.log('Logged to sheet successfully');
  } catch (error) {
    Logger.log('Error logging to sheet: ' + error.toString());
  }
}

/**
 * OPTIONAL: Send auto-reply to the submitter
 */
function sendAutoReply(recipientEmail, name) {
  const subject = 'Thank you for contacting Sviesa Photography Club';
  const body = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #DC143C;">Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to explore our work and follow us on social media:</p>
        <ul>
          <li><a href="https://instagram.com/sviesa_vu">Instagram: @sviesa_vu</a></li>
        </ul>
        <p>Best regards,<br><strong>Sviesa Photography Club Team</strong></p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <small style="color: #666;">This is an automated message. Please do not reply to this email.</small>
      </body>
    </html>
  `;
  
  try {
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      htmlBody: body
    });
  } catch (error) {
    Logger.log('Error sending auto-reply: ' + error.toString());
  }
}

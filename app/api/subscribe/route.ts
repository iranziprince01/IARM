import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'intangrev.ministries@gmail.com';

    if (!gmailUser || !gmailAppPassword) {
      console.error('Missing Gmail credentials in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Sanitize email to prevent XSS
    const sanitize = (str: string) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const sanitizedEmail = sanitize(email);

    // Get current date and time
    const now = new Date();
    const dateTime = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Email content with beautiful, professional design
    const mailOptions = {
      from: `"International Anglican Revival Ministries" <${gmailUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `📧 New Email Subscription: ${sanitizedEmail}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Email Subscription</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #f8b518 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
                ✉️ New Email Subscription
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.95;">
                International Anglican Revival Ministries
              </p>
            </td>
          </tr>

          <!-- Date/Time Badge -->
          <tr>
            <td style="padding: 20px 30px 0 30px; text-align: center;">
              <div style="display: inline-block; background-color: #eff6ff; color: #1e40af; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                📅 ${dateTime}
              </div>
            </td>
          </tr>

          <!-- Subscription Information Card -->
          <tr>
            <td style="padding: 30px;">
              <div style="background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%); border-radius: 10px; padding: 25px; border-left: 5px solid #2563eb; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                <h2 style="margin: 0 0 20px 0; color: #1e40af; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                  📬 Subscriber Information
                </h2>
                
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.1);">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td width="120" style="vertical-align: top;">
                            <strong style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 4px;">Email:</strong>
                          </td>
                          <td style="vertical-align: top;">
                            <a href="mailto:${sanitizedEmail}" style="color: #2563eb; font-size: 15px; font-weight: 600; text-decoration: none; border-bottom: 1px solid #2563eb; padding-bottom: 2px;">${sanitizedEmail}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td width="120" style="vertical-align: top;">
                            <strong style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 4px;">Subscription:</strong>
                          </td>
                          <td style="vertical-align: top;">
                            <span style="color: #374151; font-size: 15px; font-weight: 600;">Sermons & Updates</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Message Card -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #ffffff; border-radius: 10px; padding: 25px; border: 2px solid #f8b518; box-shadow: 0 2px 8px rgba(248, 181, 24, 0.15);">
                <h2 style="margin: 0 0 15px 0; color: #1e40af; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 30px; height: 30px; background: linear-gradient(135deg, #f8b518 0%, #d99a0e 100%); border-radius: 50%; margin-right: 10px; text-align: center; line-height: 30px; font-size: 16px;">💬</span>
                  Subscription Details
                </h2>
                <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #f8b518; margin-top: 15px;">
                  <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.8; font-family: 'Georgia', serif;">
                    A new subscriber has signed up to receive sermons and updates from International Anglican Revival Ministries. They will receive uplifting sermons delivered to their inbox twice a week.
                  </p>
                </div>
              </div>
            </td>
          </tr>

          <!-- Quick Action Button -->
          <tr>
            <td style="padding: 0 30px 30px 30px; text-align: center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                <tr>
                  <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); border-radius: 8px; padding: 0;">
                    <a href="mailto:${sanitizedEmail}?subject=Welcome to International Anglican Revival Ministries&body=Dear Subscriber,%0D%0A%0D%0AThank you for subscribing to our sermons and updates! We're excited to share God's word with you..." style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.3);">
                      ✉️ Send Welcome Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 25px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 13px; line-height: 1.6;">
                This subscription was created from the <strong style="color: #1e40af;">International Anglican Revival Ministries</strong> website footer.
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                You can reply directly to this email to contact the subscriber at ${sanitizedEmail}.
              </p>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                  © ${new Date().getFullYear()} International Anglican Revival Ministries. All rights reserved.
                </p>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
      text: `
New Email Subscription

Email: ${email}
Subscription: Sermons & Updates
Date: ${dateTime}

A new subscriber has signed up to receive sermons and updates from International Anglican Revival Ministries. They will receive uplifting sermons delivered to their inbox twice a week.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending subscription email:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}


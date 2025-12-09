import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Sanitize inputs to prevent XSS
    const sanitize = (str: string) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedPhone = phone ? sanitize(phone) : '';
    const sanitizedMessage = sanitize(message).replace(/\n/g, '<br>');

    // Email content
    const mailOptions = {
      from: `"${sanitizedName}" <${gmailUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `New Contact Form Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #f8b518; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #1e40af;">Name:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong style="color: #1e40af;">Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #2563eb;">${sanitizedEmail}</a></p>
            ${sanitizedPhone ? `<p style="margin: 10px 0;"><strong style="color: #1e40af;">Phone:</strong> <a href="tel:${sanitizedPhone}" style="color: #2563eb;">${sanitizedPhone}</a></p>` : ''}
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #1e40af; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #f8b518; border-radius: 4px;">
              <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This message was sent from the International Anglican Revival Ministries contact form.</p>
            <p>You can reply directly to this email to respond to ${sanitizedName}.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}


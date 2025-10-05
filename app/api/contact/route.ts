import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    // Check if API key is loaded
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY not found in environment variables')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    console.log('Attempting to send email with SendGrid...')

    // Email to you from the contact form
    const msg = {
      to: 'maxpjax@gmail.com',
      from: 'maxpjax@gmail.com', // Must be verified in SendGrid
      replyTo: email, // Allow replying directly to the sender
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from your portfolio contact form.<br>
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${name}.
      `
    }

    await sgMail.send(msg)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('SendGrid error:', error)
    console.error('Error response:', error.response?.body)
    
    // Return more specific error information
    const errorMessage = error.response?.body?.errors?.[0]?.message || error.message || 'Failed to send email'
    const errorField = error.response?.body?.errors?.[0]?.field
    
    return NextResponse.json(
      { 
        error: errorMessage,
        field: errorField,
        details: error.response?.body || error.message
      },
      { status: 500 }
    )
  }
}
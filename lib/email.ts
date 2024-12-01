import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = async () => {
  // Generate test SMTP service account from ethereal.email
  const testAccount = await nodemailer.createTestAccount();

  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/verify?token=${token}`;

  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: '"Infinitix Global" <noreply@infinitixglobal.com>',
      to: email,
      subject: 'Verify your email address',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h1 style="color: #333; text-align: center;">Welcome to Infinitix Global!</h1>
          <p style="color: #666; font-size: 16px;">Thank you for registering. Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" 
               style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Verify Email Address
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">Or copy and paste this link in your browser:</p>
          <p style="color: #666; font-size: 14px;">${verificationUrl}</p>
          <p style="color: #666; font-size: 14px;">This link will expire in 24 hours.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    
    // Log the preview URL in development
    console.log('');
    console.log('====== Email Preview Information ======');
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    console.log('=======================================');
    console.log('');

    return true;
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw error;
  }
}
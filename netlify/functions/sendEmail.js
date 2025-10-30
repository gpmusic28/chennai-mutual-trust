import nodemailer from "nodemailer";

export const handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, message } = data;

    // Configure Gmail SMTP using an App Password
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "connect@shreemfs.com",
        pass: process.env.GMAIL_APP_PASSWORD, // stored in Netlify environment
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Website Contact" <connect@shreemfs.com>`,
      to: "connect@shreemfs.com",
      subject: "New Website Inquiry",
      html: `
        <h2>New Inquiry from Website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Email send error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send email" }) };
  }
};

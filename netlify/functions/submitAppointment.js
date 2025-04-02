require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, mobile, email, date, reason } = JSON.parse(event.body);

    if (!name || !mobile || !email || !date || !reason) {
      return { statusCode: 400, body: JSON.stringify({ message: "All fields are required" }) };
    }

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Doctor's email
        pass: process.env.EMAIL_PASS, // App password (not regular password)
      },
    });

    // HTML Email to Doctor
    const doctorMailOptions = {
      from: `"Shyam Homeopathy Clinic" <${process.env.EMAIL_USER}>`,
      to: process.env.DOCTOR_EMAIL, // Doctor's email
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      `,
    };

    // HTML Confirmation Email to User
    const userMailOptions = {
      from: `"Shyam Homeopathy Clinic" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Appointment Confirmation",
      html: `
        <h3>Thank you for requesting an appointment.</h3>
         <p>Dear ${name},</p>
         <p>Thank you for booking an appointment with <strong>Shyam Homeopathy Clinic</strong></p>
         <p><strong>Your Details:</strong></p>
         <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Reason:</strong> ${reason}</li>
          <li><strong>Mobile:</strong> ${mobile}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p>We will send you a reminder one day before your appointment.</p>
        <p>Best regards,</p>
        <p><strong>Dr. Sudhir S. Jadon</strong></p>
      `,
    };

    // Send emails
    await transporter.sendMail(doctorMailOptions);
    await transporter.sendMail(userMailOptions);

    return { statusCode: 200, body: JSON.stringify({ message: "Appointment request sent successfully!" }) };

  } catch (error) {
    console.error("Error:", error);
    return { statusCode: 500, body: JSON.stringify({ message: "Failed to send request" }) };
  }
};

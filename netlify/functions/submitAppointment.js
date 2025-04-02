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

    // Email to Doctor
    const doctorMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.DOCTOR_EMAIL, // Doctor's email
      subject: "New Appointment Request",
      text: `New appointment request:\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nDate: ${date}\nReason: ${reason}`,
    };

    // Confirmation Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Appointment Confirmation",
      text: `Hello ${name},\n\nYour appointment request has been received.\n\nDate: ${date}\nReason: ${reason}\n\nWe will contact you soon.\n\nBest regards,\nDr. Sudhir S. Jadon's Clinic`,
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

require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Basic validation
    if (
      !data.name ||
      !data.address ||
      !data.city ||
      !data.mobile ||
      !data.email ||
      !data.comments
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "All fields are required!" }),
      };
    }

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email message options
    const mailOptions = {
      from: `"Shyam Homeopathy Clinic" <${process.env.EMAIL_USER}>`,
      to: "appointments.drsudhir@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        You have received a new message from the contact form:

        Name: ${data.name}
        Address: ${data.address}
        City: ${data.city}
        Mobile: ${data.mobile}
        Email: ${data.email}
        Message: ${data.comments}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Mobile:</strong> ${data.mobile}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.comments}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};

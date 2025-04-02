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
    // Parse request body properly
    const data = JSON.parse(event.body);

    // Validate all required fields
    const requiredFields = ["name", "address", "city", "mobile", "email", "comments"];
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === "") {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: `${field} is required!` }),
        };
      }
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email to Doctor
    const doctorMailOptions = {
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

    // Email to User (Confirmation)
    const userMailOptions = {
      from: `"Shyam Homeopathy Clinic" <${process.env.EMAIL_USER}>`,
      to: data.email, // Send email to the user
      subject: "Confirmation: We Received Your Message",
      text: `
        Dear ${data.name},

        Thank you for reaching out to Shyam Homeopathy Clinic. We have received your message and will get back to you soon.

        Below are the details you submitted:
        Name: ${data.name}
        Address: ${data.address}
        City: ${data.city}
        Mobile: ${data.mobile}
        Email: ${data.email}
        Message: ${data.comments}

        Best Regards,
        Shyam Homeopathy Clinic
      `,
      html: `
        <h3>Thank You for Contacting Us!</h3>
        <p>Dear ${data.name},</p>
        <p>Thank you for reaching out to <strong>Shyam Homeopathy Clinic</strong>. We have received your message and will get back to you soon.</p>
        <p><strong>Your Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Address:</strong> ${data.address}</li>
          <li><strong>City:</strong> ${data.city}</li>
          <li><strong>Mobile:</strong> ${data.mobile}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Message:</strong> ${data.comments}</li>
        </ul>
        <p>Best Regards,</p>
        <p><strong>Shyam Homeopathy Clinic</strong></p>
      `,
    };

    // Send both emails
    await transporter.sendMail(doctorMailOptions);
    await transporter.sendMail(userMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error", error: error.message }),
    };
  }
};

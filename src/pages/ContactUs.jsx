import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { FaUser, FaMapMarkerAlt, FaCity, FaPhone, FaEnvelope, FaComment, FaArrowLeft } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ContactUs = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const init = {
    name: { value: "", touched: false, valid: false, error: "" },
    address: { value: "", touched: false, valid: false, error: "" },
    city: { value: "", touched: false, valid: false, error: "" },
    mobile: { value: "", touched: false, valid: false, error: "" },
    email: { value: "", touched: false, valid: false, error: "" },
    comments: { value: "", touched: false, valid: false, error: "" },
    formvalid: false,
  };

  const [formData, setFormData] = useState(init);

  const validateData = (name, value) => {
    let valid = false;
    let error = "";
    switch (name) {
      case "name":
        const namePattern = /^[A-Z][a-zA-Z\s]{2,30}$/;
        if (namePattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Name should start with capital letter and be 3-30 characters long.";
        }
        break;

      case "address":
        if (value.trim().length >= 10) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Address should be at least 10 characters long.";
        }
        break;

      case "city":
        const cityPattern = /^[A-Z][a-zA-Z\s]{2,30}$/;
        if (cityPattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "City name should start with capital letter.";
        }
        break;

      case "mobile":
        const mobilePattern = /^[0-9]{10}$/;
        if (mobilePattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Mobile number must be 10 digits.";
        }
        break;

      case "email":
        const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (emailPattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Email is invalid.";
        }
        break;

      case "comments":
        if (value.trim().length >= 10) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Message should be at least 10 characters long.";
        }
        break;

      default:
        break;
    }
    return { valid, error };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const { valid, error } = validateData(name, value);

    let formvalid = true;
    const newFormData = { ...formData };
    newFormData[name] = { value, touched: true, valid, error };

    for (const key in newFormData) {
      if (key !== "formvalid" && !newFormData[key].valid) {
        formvalid = false;
        break;
      }
    }

    newFormData.formvalid = formvalid;
    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5353/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.value,
          address: formData.address.value,
          city: formData.city.value,
          mobile: formData.mobile.value,
          email: formData.email.value,
          comments: formData.comments.value,
        }),
      });

      if (response.ok) {
        setShowSuccessDialog(true);
        setFormData(init);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to send message');
        setShowErrorDialog(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while sending the message");
      setShowErrorDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 to-white">
      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-green-600">Message Sent Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for contacting us. We've received your message and a confirmation has been sent to your email address.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-green-600 hover:bg-green-700"
              onClick={() => {
                setShowSuccessDialog(false);
                navigate("/");
              }}
            >
              Return Home
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Dialog */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-600">Error</AlertDialogTitle>
            <AlertDialogDescription>
              {errorMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => setShowErrorDialog(false)}
            >
              Try Again
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Hero Section */}
      <div
        className="relative w-full flex flex-col items-center justify-center min-h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-teal-200 font-medium">
            Get in touch with Shyam Homeopathy Clinic
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex-grow flex justify-center items-center p-6 md:p-10">
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-4xl border-t-4 border-teal-500">
          {/* Form Header */}
          <div className="bg-teal-600 px-8 py-6">
            <div className="flex items-center justify-center space-x-3">
              <FaEnvelope className="text-white text-2xl" />
              <h2 className="text-2xl font-bold text-white">
                Contact Form
              </h2>
            </div>
            <p className="text-teal-100 text-center mt-2">
              We'd love to hear from you
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center text-gray-700">
                    <FaUser className="mr-2 text-teal-600" />
                    Full Name*
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name.value}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your full name"
                  />
                  {formData.name.touched && !formData.name.valid && (
                    <p className="text-red-500 text-sm">{formData.name.error}</p>
                  )}
                </div>

                {/* City Field */}
                <div className="space-y-2">
                  <Label htmlFor="city" className="flex items-center text-gray-700">
                    <FaCity className="mr-2 text-teal-600" />
                    City*
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city.value}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your city"
                  />
                  {formData.city.touched && !formData.city.valid && (
                    <p className="text-red-500 text-sm">{formData.city.error}</p>
                  )}
                </div>

                {/* Address Field */}
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address" className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2 text-teal-600" />
                    Address*
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address.value}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your full address"
                  />
                  {formData.address.touched && !formData.address.valid && (
                    <p className="text-red-500 text-sm">{formData.address.error}</p>
                  )}
                </div>

                {/* Mobile Field */}
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="flex items-center text-gray-700">
                    <FaPhone className="mr-2 text-teal-600" />
                    Mobile Number*
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile.value}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your mobile number"
                  />
                  {formData.mobile.touched && !formData.mobile.valid && (
                    <p className="text-red-500 text-sm">{formData.mobile.error}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center text-gray-700">
                    <FaEnvelope className="mr-2 text-teal-600" />
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email.value}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your email address"
                  />
                  {formData.email.touched && !formData.email.valid && (
                    <p className="text-red-500 text-sm">{formData.email.error}</p>
                  )}
                </div>
              </div>

              {/* Comments Field */}
              <div className="space-y-2">
                <Label htmlFor="comments" className="flex items-center text-gray-700">
                  <FaComment className="mr-2 text-teal-600" />
                  Your Message*
                </Label>
                <Textarea
                  id="comments"
                  name="comments"
                  value={formData.comments.value}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-teal-500"
                  placeholder="Please share your thoughts or questions..."
                />
                {formData.comments.touched && !formData.comments.valid && (
                  <p className="text-red-500 text-sm">{formData.comments.error}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-lg font-semibold shadow-md transition-all transform hover:scale-105"
                  disabled={isSubmitting || !formData.formvalid}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                <Button
                  type="button"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-8 rounded-lg font-semibold shadow-md transition-all flex items-center justify-center gap-2"
                  onClick={handleBack}
                >
                  <FaArrowLeft />
                  Back to Home
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info and Map Section */}
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 max-w-6xl mx-auto">
        {/* Contact Details Card */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-teal-500">
          <div className="bg-teal-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Shyam Homeopathy Clinic
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">Hastinapur Morar, Gwalior, (M.P.)</p>
            </div>
            <div className="flex items-start">
              <FaPhone className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
              <div>

                <a
                  href="tel:+917697855964"
                  className="text-gray-600 hover:text-teal-600 transition-colors flex items-center"
                >
                  +91 7697855964
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
              <a href="mailto:jadonsudhir5@gmail.com" className="text-blue-500 hover:underline">
                jadonsudhir5@gmail.com
              </a>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-medium">For Appointments:</p>
                <a href="mailto:appointments.drsudhir@gmail.com" className="text-blue-500 hover:underline">
                  appointments.drsudhir@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Card */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-teal-500">
          <div className="bg-teal-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Our Location
            </h2>
          </div>
          <div className="p-4">
            <iframe
              title="Shyam Homeopathy Clinic"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3580.8830905467885!2d78.45076977541402!3d26.167936677098893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDEwJzA0LjYiTiA3OMKwMjcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1742629878044!5m2!1sen!2sin"
              className="w-full h-64 md:h-80 border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
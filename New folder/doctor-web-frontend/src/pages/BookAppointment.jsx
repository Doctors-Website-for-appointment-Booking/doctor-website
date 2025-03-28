import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaNotesMedical, FaArrowLeft } from "react-icons/fa";
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

const BookAppointment = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const init = {
    name: { value: "", touched: false, valid: false, error: "" },
    mobile: { value: "", touched: false, valid: false, error: "" },
    email: { value: "", touched: false, valid: false, error: "" },
    date: { value: "", touched: false, valid: false, error: "" },
    reason: { value: "", touched: false, valid: false, error: "" },
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

      case "date":
        if (value) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Please select a date.";
        }
        break;

      case "reason":
        if (value.trim().length >= 10) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Reason should be at least 10 characters long.";
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
      const response = await fetch('http://localhost:5353/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.value,
          mobile: formData.mobile.value,
          email: formData.email.value,
          date: formData.date.value,
          reason: formData.reason.value,
        }),
      });

      if (response.ok) {
        setShowSuccessDialog(true);
        setFormData(init);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to book appointment');
        setShowErrorDialog(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while booking the appointment");
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
            <AlertDialogTitle className="text-green-600">Appointment Booked Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Your appointment has been successfully booked. A confirmation has been sent to your email address.
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
            Book Your Appointment
          </h1>
          <p className="text-xl text-teal-200 font-medium">
            Schedule a consultation with Dr. Sudhir S. Jadon
          </p>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className="flex-grow flex justify-center items-center p-6 md:p-10">
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-4xl border-t-4 border-teal-500 transform transition-all hover:shadow-lg">
          {/* Form Header */}
          <div className="bg-teal-600 px-8 py-6">
            <div className="flex items-center justify-center space-x-3">
              <FaCalendarAlt className="text-white text-2xl" />
              <h2 className="text-2xl font-bold text-white">
                Appointment Request Form
              </h2>
            </div>
            <p className="text-teal-100 text-center mt-2">
              Please fill in your details to book an appointment
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

                {/* Date Field */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center text-gray-700">
                    <FaCalendarAlt className="mr-2 text-teal-600" />
                    Preferred Date*
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date.value}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-teal-500"
                  />
                  {formData.date.touched && !formData.date.valid && (
                    <p className="text-red-500 text-sm">{formData.date.error}</p>
                  )}
                </div>
              </div>

              {/* Reason Field */}
              <div className="space-y-2">
                <Label htmlFor="reason" className="flex items-center text-gray-700">
                  <FaNotesMedical className="mr-2 text-teal-600" />
                  Reason for Appointment*
                </Label>
                <Textarea
                  id="reason"
                  name="reason"
                  value={formData.reason.value}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="py-3 px-4 border-gray-300 focus:ring-2 focus:ring-teal-500"
                  placeholder="Please describe the reason for your visit..."
                />
                {formData.reason.touched && !formData.reason.valid && (
                  <p className="text-red-500 text-sm">{formData.reason.error}</p>
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
                      Processing...
                    </span>
                  ) : (
                    "Book Appointment"
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
    </div>
  );
};

export default BookAppointment;
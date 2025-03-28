import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer 
      className="w-full border-t border-gray-200 bg-white"
      style={{ backgroundImage: "url('/banner.png')", backgroundSize: "cover" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12">
        {/* Clinic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-teal-600 flex items-center">
            <img 
              src="/Logo-1.png" 
              alt="Clinic Logo" 
              className="h-8 mr-2" 
            />
            Shyam Homeopathy Clinic
          </h2>
          <p className="text-gray-600">
            Providing holistic healthcare solutions with compassion and expertise since 2000.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-teal-600 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link 
                to="/About" 
                className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
              >
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
              >
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                Doctor's Profile
              </Link>
            </li>
            <li>
              <Link 
                to="/ContactUs" 
                className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
              >
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                Locations
              </Link>
            </li>
            <li>
              <Link 
                to="/Faqs" 
                className="text-gray-600 hover:text-blue-600 flex items-center transition-colors"
              >
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                FAQ's
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-teal-600">Reach Us</h3>
          <div className="space-y-3">
            {/* Phone Numbers */}
            <div className="flex items-start">
              <FaPhone className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <div className="space-y-2">
                
                <a 
                  href="tel:+917697855964" 
                  className="text-gray-600 hover:text-teal-600 transition-colors flex items-center"
                >
                  +91 7697855964
                </a>
              </div>
            </div>
            
            {/* General Email */}
            <div className="flex items-start">
              <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <a 
                href="mailto:jadonsudhir5@gmail.com" 
                className="text-blue-500 hover:underline hover:text-teal-600 transition-colors"
              >
                jadonsudhir5@gmail.com
              </a>
            </div>
            
            {/* Appointment Email */}
            <div className="pt-2">
              <p className="text-gray-600 font-medium mb-1">For Appointments:</p>
              <div className="flex items-start">
                <FaEnvelope className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:appointments.drsudhir@gmail.com" 
                  className="text-blue-500 hover:underline hover:text-teal-600 transition-colors"
                >
                  appointments.drsudhir@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-teal-600 bg-opacity-90 text-white py-4">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Shyam Homeopathy Clinic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
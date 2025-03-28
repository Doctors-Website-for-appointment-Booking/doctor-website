import React, { useState } from "react";
import { FaUser, FaCalendarCheck, FaHome, FaInfoCircle, FaEnvelope, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 bg-white shadow-lg py-3 z-50 border-b border-blue-100"
      style={{ backgroundImage: "url('/banner.png')", backgroundSize: "cover" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
        <div className="flex items-center">
          <img 
            src="/Logo-1.png" 
            alt="Jadon Healthcare Logo" 
            className="h-14 transition-transform hover:scale-105" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors group"
          >
            <FaHome className="mr-2 text-blue-500 group-hover:text-blue-600" />
            <span className="border-b-2 border-transparent group-hover:border-blue-500 pb-1">
              Doctor's Profile
            </span>
          </Link>
          
          <Link 
            to="/About" 
            className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors group"
          >
            <FaInfoCircle className="mr-2 text-blue-500 group-hover:text-blue-600" />
            <span className="border-b-2 border-transparent group-hover:border-blue-500 pb-1">
              About
            </span>
          </Link>
          
          <Link 
            to="/ContactUs" 
            className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors group"
          >
            <FaEnvelope className="mr-2 text-blue-500 group-hover:text-blue-600" />
            <span className="border-b-2 border-transparent group-hover:border-blue-500 pb-1">
              Contact Us
            </span>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
          
          <Link 
            to="/BookAppointment" 
            className="hidden sm:flex items-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:from-teal-600 hover:to-teal-700"
          >
            <FaCalendarCheck className="mr-2" />
            <span className="font-semibold">Fix an Appointment</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors group"
              onClick={toggleMenu}
            >
              <FaHome className="mr-3 text-blue-500 group-hover:text-blue-600" />
              <span>Doctor's Profile</span>
            </Link>
            
            <Link 
              to="/About" 
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors group"
              onClick={toggleMenu}
            >
              <FaInfoCircle className="mr-3 text-blue-500 group-hover:text-blue-600" />
              <span>About</span>
            </Link>
            
            <Link 
              to="/ContactUs" 
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors group"
              onClick={toggleMenu}
            >
              <FaEnvelope className="mr-3 text-blue-500 group-hover:text-blue-600" />
              <span>Contact Us</span>
            </Link>

            <Link 
              to="/BookAppointment" 
              className="flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:from-teal-600 hover:to-teal-700 mt-2"
              onClick={toggleMenu}
            >
              <FaCalendarCheck className="mr-2" />
              <span className="font-semibold">Fix an Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
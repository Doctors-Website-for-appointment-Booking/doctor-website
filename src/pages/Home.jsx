import React from "react";
import { FaPhone, FaEnvelope, FaCalendarAlt, FaClinicMedical, FaUserMd, FaHeartbeat } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section with Call-to-Action */}
      <div
        className="relative w-full flex flex-col items-center justify-center min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Dr. Sudhir S. Jadon
          </h1>
          <p className="text-xl md:text-2xl text-teal-300 font-medium mb-8">
            BHMS & General Physician | Holistic Healthcare Specialist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917697855964"
              className="bg-teal-600 hover:bg-white-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <FaPhone /> Call Now
            </a>
            <Link
              to="/BookAppointment"
              className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <FaEnvelope /> Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Doctor Profile Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Doctor Image with Frame */}
          <div className="w-full lg:w-1/3 relative group">
            <div className="absolute -inset-2 bg-teal-500 rounded-xl opacity-25 group-hover:opacity-50 transition-all duration-300 blur-sm"></div>
            <img
              src="/doctor_img.jpg"
              alt="Dr. Sudhir S. Jadon"
              className="relative w-full h-auto object-cover rounded-xl shadow-2xl z-10 transform group-hover:-translate-y-1 transition-all duration-300"
            />
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clinic Hours</h3>
              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <FaCalendarAlt className="text-teal-500" />
                <span>Monday - Saturday</span>
              </div>
              <div className="pl-8 text-gray-600">
                <p>08:00 AM - 01:00 PM</p>
                <p>02:00 PM - 04:00 PM</p>
              </div>
            </div>
          </div>

          {/* Doctor Information */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-teal-600">Dr. Sudhir S. Jadon</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Dr. Sudhir S. Jadon is a highly skilled and compassionate homeopathic physician with a Bachelor of Homeopathic Medicine and Surgery (BHMS) degree from the prestigious Jiwaji University. With years of extensive experience in general medicine, Dr. Jadon has established himself as a trusted healthcare professional dedicated to providing holistic and patient-centered care.
            </p>

            {/* Expertise Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <FaUserMd className="text-teal-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">General Medicine</h3>
                </div>
                <p className="text-gray-600">
                  Specializing in diagnosing and treating a wide range of general health conditions, ensuring comprehensive care for patients of all ages.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <GiMedicines className="text-teal-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Homeopathic Treatment</h3>
                </div>
                <p className="text-gray-600">
                  Offering personalized treatment plans that address the root cause of ailments, promoting long-term healing and well-being.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <FaHeartbeat className="text-teal-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Holistic Approach</h3>
                </div>
                <p className="text-gray-600">
                  Treating the individual as a whole, focusing not only on physical symptoms but also on emotional and mental well-being.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <FaClinicMedical className="text-teal-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Patient-Centered Care</h3>
                </div>
                <p className="text-gray-600">
                  Providing compassionate healthcare tailored to each patient's unique needs and circumstances.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="mailto:jadonsudhir5@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                  <FaEnvelope className="text-teal-500 text-xl" />
                  <span>jadonsudhir5@gmail.com</span>
                </a>
                <a href="mailto:appointments.sudhir@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                  <FaEnvelope className="text-teal-500 text-xl" />
                  <span>appointments.drsudhir@gmail.com</span>
                </a>
                
                <a href="tel:+917697855964" className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors">
                  <FaPhone className="text-teal-500 text-xl" />
                  <span>+91-7697855964</span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
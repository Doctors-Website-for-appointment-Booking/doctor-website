import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full flex items-center justify-center min-h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* About Section */}
      <section className="relative py-16 px-6 md:px-10">
        <div className="w-full max-w-6xl mx-auto">
          {/* Doctor Profile with Wider Image */}
          <div className="flex flex-col items-center mb-16">
            {/* Wider Image Container */}
            <div className="w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-xl mb-8">
              <img
                src="/doctor-img2.jpg"
                alt="Dr. Sudhir S. Jadon at clinic"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Doctor Information */}
            <div className="w-full text-center">
              <h2 className="text-4xl font-extrabold text-gray-800">
                ABOUT <span className="text-teal-600">US</span>
              </h2>
              <p className="text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
                Welcome to Dr. Sudhir S. Jadon's Clinic, where holistic healing and patient-centered care are at
                the heart of everything we do. Led by Dr. Sudhir S. Jadon, a highly qualified and experienced BHMS &
                General Physician, our clinic is dedicated to providing compassionate, personalized, and effective
                healthcare solutions to patients of all ages.
              </p>
            </div>
          </div>

          {/* Our Philosophy Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-teal-500 mb-6">Our Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                At Dr. Sudhir S. Jadon's Clinic, we believe in treating the individual as a whole, not just the symptoms.
                Our approach combines the principles of homeopathy with modern medical knowledge to address the root cause
                of ailments and promote long-term healing.
              </p>
            </div>
            <div className="h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/doctor-img1.jpg"  // Replace with your clinic interior image
                alt="Clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-16">
            <h3 className="text-3xl font-bold text-teal-500 mb-6 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              To be a beacon of holistic healing, empowering individuals to achieve optimal health and wellness through personalized,
              compassionate, and effective healthcare solutions.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-teal-500 mb-8 text-center">Our Mission</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-teal-600 mb-3">Patient-Centered Care</h4>
                <p className="text-gray-600">
                  To prioritize the unique needs and concerns of every patient, ensuring they receive the highest standard of care.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-teal-600 mb-3">Holistic Healing</h4>
                <p className="text-gray-600">
                  To treat the individual as a whole, addressing the root cause of ailments and promoting overall well-being.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-teal-600 mb-3">Education and Prevention</h4>
                <p className="text-gray-600">
                  To empower patients with the knowledge and tools they need to lead healthier, more fulfilling lives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-teal-600 mb-3">Excellence in Healthcare</h4>
                <p className="text-gray-600">
                  To continuously strive for excellence in medical practice, staying updated with the latest advancements.
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="bg-teal-50 p-8 rounded-xl border-l-4 border-teal-500 mb-16">
            <h3 className="text-3xl font-bold text-teal-500 mb-6">Our Commitment</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">✓</span>
                <span className="text-gray-700">
                  Providing <strong>compassionate and empathetic care</strong> to every patient
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">✓</span>
                <span className="text-gray-700">
                  Ensuring <strong>transparency and honesty</strong> in all our interactions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">✓</span>
                <span className="text-gray-700">
                  Continuously improving our services to meet the evolving needs of our patients
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3">✓</span>
                <span className="text-gray-700">
                  Building long-term relationships based on trust, respect, and mutual understanding
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
            WHY <span className="text-teal-500">CHOOSE US?</span>
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover what sets our clinic apart and why patients trust us with their healthcare needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 text-2xl">★</span>
              </div>
              <h4 className="text-xl font-bold text-teal-600 mb-3">Experienced Professional</h4>
              <p className="text-gray-600">
                Dr. Sudhir S. Jadon brings years of experience and a proven track record of successful patient outcomes.
              </p>
            </div>

            {/* Approach */}
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 text-2xl">♻</span>
              </div>
              <h4 className="text-xl font-bold text-teal-600 mb-3">Holistic Approach</h4>
              <p className="text-gray-600">
                We focus on treating the root cause of ailments, not just the symptoms, ensuring long-term healing.
              </p>
            </div>

            {/* Care */}
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600 text-2xl">❤</span>
              </div>
              <h4 className="text-xl font-bold text-teal-600 mb-3">Personalized Care</h4>
              <p className="text-gray-600">
                Every patient receives a tailored treatment plan designed to meet their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React, { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I make sure that my appointment is confirmed?",
      answer: "Once you book an appointment, you will receive a confirmation email with all details including appointment date, time, and doctor's name. If the doctor is unavailable, we'll contact you to reschedule.",
      icon: "📧"
    },
    {
      question: "How do I book an appointment for myself or others?",
      answer: "Click 'BOOK AN APPOINTMENT' on our website or call 9926410749 / 7697855964. Online bookings require 2 days notice, while phone bookings can be made 1 hour in advance.",
      icon: "📅"
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can manage your appointments through our website or by calling the clinic directly.",
      icon: "🔄"
    },
    {
      question: "Do I need to fill the details again for future appointments?",
      answer: "No, your information is saved securely for future bookings.",
      icon: "💾"
    },
    {
      question: "What should I do when I arrive at the clinic?",
      answer: "Please check in at the reception desk to confirm your arrival and complete any necessary paperwork.",
      icon: "🏥"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <div
        className="relative w-full flex flex-col items-center justify-center min-h-[50vh] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/background.jpg')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-teal-200 font-medium">
            Find answers to common questions about our services
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-teal-600 mb-2">
              Your Questions Answered
            </h2>
            <p className="text-gray-600 mb-8">
              Here are some of the most common questions we receive from our patients
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-lg transition-all duration-300 ${openIndex === index ? "bg-teal-50 border-teal-300" : "hover:bg-gray-50"}`}
                >
                  <button
                    className={`flex items-center justify-between w-full p-5 text-left font-medium ${openIndex === index ? "text-teal-700" : "text-gray-800"}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{faq.icon}</span>
                      <span className="text-lg md:text-xl">{faq.question}</span>
                    </div>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${openIndex === index ? "rotate-180 text-teal-600" : "text-gray-500"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openIndex === index && (
                    <div className="px-5 pb-5 pt-2 text-gray-700 animate-fadeIn">
                      <div className="pl-10 border-l-2 border-teal-300">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Still have questions?
              </h3>
              <p className="text-blue-700 mb-4">
                Contact our support team for personalized assistance.
              </p>
              <a
                href="/ContactUs"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-md"
              >
                <FaEnvelope className="mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add this to your global CSS or in a style tag
const FaEnvelope = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default Faqs;
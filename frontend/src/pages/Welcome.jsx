// src/pages/WelcomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Contactus from "../components/Contactus";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Header Section */}
      <header className="w-full bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="App Logo" className="w-20 h-20" />
            <span className="text-xl font-bold text-indigo-700">GovEase</span>
          </div>
          <nav className="flex space-x-4 text-indigo-700 font-semibold">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#how-it-works" className="hover:text-blue-700">How It Works</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#faq" className="hover:text-blue-700">FAQs</a>
            <a href="#contact" className="hover:text-blue-700">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 bg-gradient-to-r from-blue-900 to-purple-600 relative">
        {/* Text Content */}
        <div className="text-left max-w-lg md:mr-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
            Easy Access to Your Documents
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Access everything you need in one place, with reliable verification and seamless service management.
          </p>
          <button
            onClick={() => navigate("/Verification")}
            className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform"
          >
            Get Started
          </button>
        </div>

        {/* Image Content */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative">
            <img
              src="/hero-image.jpeg"
              alt="Documents"
              className="w-4/4 h-auto max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>



      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-100 py-16 text-blue-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 border-b-2 pb-4">
            How It Works?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* OTP Verification */}
            <div className="p-6 border rounded-lg shadow-lg bg-white">
              <img
                src="/otp_verification.jpg"
                alt="OTP Verification"
                className="w-28 h-28 mx-auto mb-6 rounded-full bg-gray-200 p-2"
              />
              <h3 className="text-xl font-bold mb-4">OTP Verification</h3>
              <p className="text-sm">
                Register effortlessly using your mobile number and receive a One-Time
                Password (OTP) for secure verification of your account. This ensures a
                seamless onboarding experience.
              </p>
            </div>

            {/* Citizen Verification */}
            <div className="p-6 border rounded-lg shadow-lg bg-white">
              <img
                src="/citizen-verification.jpg"
                alt="Citizen Verification"
                className="w-28 h-28 mx-auto mb-6 rounded-full bg-gray-200 p-2"
              />
              <h3 className="text-xl font-bold mb-4">Citizen Verification</h3>
              <p className="text-sm">
                Authenticate your identity effortlessly by linking with official
                government records. This step ensures accurate validation and smooth
                access to services.
              </p>
            </div>

            {/* Enjoy the App */}
            <div className="p-6 border rounded-lg shadow-lg bg-white">
              <img
                src="/enjoy-app.avif"
                alt="Enjoy App"
                className="w-28 h-28 mx-auto mb-6 rounded-full bg-gray-200 p-2"
              />
              <h3 className="text-xl font-bold mb-4">Enjoy the App</h3>
              <p className="text-sm">
                Experience a unified platform where you can access all your essential
                services through an intuitive and user-friendly interface designed to
                meet your needs.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="bg-white py-16 text-blue-900">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center border-b-2 pb-4">
            Services
          </h2>

          {/* Citizenship Details */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Citizenship Details</h3>
              <ul className="list-none space-y-2 pl-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span>
                  Access and verify your citizenship details easily.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span>
                  Ensure your records are accurate and up-to-date.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span>
                  Get valid documentation for government-related services.
                </li>
              </ul>
            </div>
            <div className="md:w-/2 flex justify-center">
              <img
                src="/citizenship-details.jpg"
                alt="Citizenship Details"
                className="w-3/4 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* License Details */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">License Details</h3>
              <ul className="list-none space-y-2 pl-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span>
                  Verify your driving license details instantly.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span>
                  Quick access for license verification and renewals.
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span>
                  Seamless process for managing your license data.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/license_card.webp"
                alt="License Details"
                className="w-3/4 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Subheading for More Services */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center border-b-2 pb-4">
            And Many More Services
          </h2>

          {/* Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* PAN Details */}
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
              <img
                src="/pan-details.jpg"
                alt="PAN Details"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-bold text-blue-800">PAN Details</h3>
            </div>

            {/* Voter Details */}
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
              <img
                src="/voter-details.jpeg"
                alt="Voter Details"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-bold text-blue-800">Voter Details</h3>
            </div>

            {/* Plus 2 Details */}
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
              <img
                src="/plus2-details.jpeg"
                alt="Plus 2 Details"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-bold text-blue-800">Plus 2 Details</h3>
            </div>

            {/* Birth Certificate Details */}
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
              <img
                src="/birth-certificate-details.jpg"
                alt="Birth Certificate Details"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-bold text-blue-800">
                Birth Certificate Details
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="bg-gray-100 py-16 text-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 border-b-2 pb-4">Frequently Asked Questions</h2>
          <div className="space-y-10">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">How do I verify my citizenship details?</h3>
              <p className="text-sm max-w-3xl mx-auto">
                To verify your citizenship details, simply input your citizenship ID and name in the app. Our platform will cross-check the provided information with official records, ensuring that your details are accurately verified for government services.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">What fields are required for license verification?</h3>
              <p className="text-sm max-w-3xl mx-auto">
                For license verification, you'll need to enter your driving license number along with your full name. These details will be cross-referenced with government databases to confirm the authenticity of your driving license, allowing for quick and secure verification.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">How secure is my data?</h3>
              <p className="text-sm max-w-3xl mx-auto">
                We take your privacy and security seriously. Your data is encrypted using industry-standard encryption protocols, ensuring that all personal information you submit remains safe and confidential. Additionally, we comply with the latest data protection regulations to provide you with the highest level of security.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">How do I contact support?</h3>
              <p className="text-sm max-w-3xl mx-auto">
                If you need assistance, our support team is here to help! You can reach out to us through the "Contact Us" section in the app, where you'll find a form to submit your query. Alternatively, you can email us directly at support@govease.com, and our team will respond as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Us Section */}
      {/* <section id="contact" className="bg-white py-16 text-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 border-b-2 pb-4">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block font-semibold mb-2">Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Email</label>
              <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Message</label>
              <textarea className="w-full p-2 border rounded" rows="4" placeholder="Your message"></textarea>
            </div>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Submit</button>
          </form>
        </div>
      </section> */}
      <Contactus/>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-blue-900 to-red-600 text-white py-10">
        <div className="container mx-auto px-4">
          {/* Logo and Name */}
          <div className="flex flex-col items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-20 h-20 rounded-full mb-2" />
            <span className="text-lg font-bold">GovEase</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 mb-6 text-sm">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#how-it-works" className="hover:underline">How It Works</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#faq" className="hover:underline">FAQs</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
          </nav>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-4 text-center text-sm">
            <p>© 2025 All rights reserved. | GovEase</p>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Welcome;

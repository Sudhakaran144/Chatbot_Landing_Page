import React from "react";
import logo from '../assets/chatbot.png';
import { FaXTwitter } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h2 className="text-xl font-bold">Logo</h2>
          </div>
          <p className="w-full sm:w-[80%] text-sm mt-4">
            Instantly assist customers, boost sales, and streamline operations with our intelligent chatbot designed for hardware stores.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="#" aria-label="Facebook" className="text-2xl hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-2xl hover:text-blue-600">
              <TfiLinkedin />
            </a>
            <a href="#" aria-label="Twitter" className="text-2xl hover:text-blue-600">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Features</a></li>
            <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="mt-4 space-y-2">
            <p>
              <a href="mailto:companyxyz@gmail.com" className="hover:text-gray-400 flex items-center gap-3">
                <HiMail /> companyxyz@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:9876543210" className="hover:text-gray-400 flex items-center gap-3">
                <FaPhone /> 9876543210
              </a>
            </p>
          </div>
          <form className="mt-4 flex items-center w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 text-2xl"
            >
              <FaArrowAltCircleRight />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

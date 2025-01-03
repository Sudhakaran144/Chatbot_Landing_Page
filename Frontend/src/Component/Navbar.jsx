import React from 'react';
import logo from '../assets/chatbot.png';

const Navbar = () => {
  return (
    <nav className=" w-full my-6  bg-transparent top-5 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center  px-4 py-2 border border-navbarBorderColor rounded-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Chatbot Logo" className="h-8 w-8" />
          <h1 className="text-xl font-poppins font-semibold text-gray-800">BOT.AI</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden  md:flex space-x-6 font-poppins text-navitemColor">
          <a href="#home" className="hover:text-gray-800">Home</a>
          <a href="#features" className="hover:text-gray-800">Features</a>
          <a href="#pricing" className="hover:text-gray-800">Pricing</a>
          <a href="#contact" className="hover:text-gray-800">Contact</a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-poppins">
            Try Now
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white font-poppins">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

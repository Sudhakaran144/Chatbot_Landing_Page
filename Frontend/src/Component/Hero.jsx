import React from "react";
import { RiVideoAiLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import hero_image from "../assets/hero.png";
import logo from "../assets/chatbot.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center gap-5 px-4">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center pt-10">
          Empower Your Hardware Store <br /> with AI-Powered Solutions
        </p>
        <p className="text-sm sm:text-base md:text-lg text-center font-medium text-gray-500">
          Instantly assist customers, boost sales, and streamline operations{" "}
          <br className="hidden md:block" /> with our intelligent chatbot designed for hardware stores
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button className="flex justify-center items-center text-white bg-blue-800 border border-blue-800 px-4 py-2 sm:px-5 sm:py-3 rounded-md gap-2">
            Try the Demo <span className="text-xl"><RiVideoAiLine /></span>
          </button>
          <button className="flex justify-center items-center px-4 py-2 sm:px-5 sm:py-3 rounded-md gap-2 border border-blue-800 font-medium text-gray-500">
            Book a live demo <span className="text-xl"><MdOutlineEdit /></span>
          </button>
        </div>
      </div>
      <div className="pt-10 w-full flex flex-col items-center justify-center relative">
        <img className="w-[600px] max-w-full" src={hero_image} alt="Chatbot Image" /> 
        <div className="w-full max-w-screen-lg absolute top-[10rem] left-1/2 transform -translate-x-1/2 flex items-start"> 
          <div className="flex items-end space-x-2 p-4"> 
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-200 rounded-full">
              <img className="w-4/6" src={logo} alt="Logo" />
            </div> 
            <div className="bg-blue-500 text-white rounded-r-xl rounded-tl-xl p-2 sm:p-3 max-w-xs sm:max-w-sm shadow-lg">
              <p className="text-xl max-lg:text-base max-sm:text-sm">
                Hey there! What can I help <br /> with you today?
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-lg absolute top-[15rem] left-1/2 transform translate-x-44 flex items-start">
          <div className="flex items-end space-x-2 p-4">
            <div className="bg-white text-gray-700 font-medium rounded-l-xl rounded-tr-xl p-2 sm:p-3 max-w-xs sm:max-w-sm shadow-lg">
              <p className="text-xl  max-lg:text-base max-sm:text-sm">Hey there! What can I help <br /> with you today?</p>
            </div>
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-200 rounded-full">
              <img className="w-4/6" src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-lg absolute top-[20rem] left-1/2 transform -translate-x-1/2 flex items-start"> 
          <div className="flex items-end space-x-2 p-4"> 
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-200 rounded-full">
              <img className="w-4/6" src={logo} alt="Logo" />
            </div> 
            <div className="bg-blue-500 text-white rounded-r-xl rounded-tl-xl p-2 sm:p-3 max-w-xs sm:max-w-sm shadow-lg">
              <p className="text-xl max-lg:text-base max-sm:text-sm">
                Hey there! What can I help <br /> with you today?
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-lg absolute top-[25rem] left-1/2 transform translate-x-44 flex items-start">
          <div className="flex items-end space-x-2 p-4">
            <div className="bg-white text-gray-700 font-medium rounded-l-xl rounded-tr-xl p-2 sm:p-3 max-w-xs sm:max-w-sm shadow-lg">
              <p className="text-xl  max-lg:text-base max-sm:text-sm">Hey there! What can I help <br /> with you today?</p>
            </div>
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-200 rounded-full">
              <img className="w-4/6" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

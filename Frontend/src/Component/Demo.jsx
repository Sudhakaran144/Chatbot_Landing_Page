import React from 'react';
import chatbotIcon from '../assets/chatbot.png';
import { RiVideoAiLine } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';

const Demo = () => {
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-row py-10 px-6 md:px-16 lg:px-32"> 
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <img 
          className="w-10/12 sm:w-8/12 md:w-full max-w-sm md:max-w-md lg:max-w-lg" 
          src={chatbotIcon} 
          alt="Chatbot Icon" 
        />
      </div> 
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-color">
          See It In Action
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500">
          Ready to see our chatbot in action? Try it yourself.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="flex justify-center items-center text-white bg-blue-800 border border-blue-800 px-4 py-2 sm:px-5 sm:py-3 rounded-md gap-2">
            Try the Demo <span className="text-xl"><RiVideoAiLine /></span>
          </button>
          <button className="flex justify-center items-center px-4 py-2 sm:px-5 sm:py-3 rounded-md gap-2 border border-blue-800 font-medium text-gray-500">
            Book a live demo <span className="text-xl"><MdOutlineEdit /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;

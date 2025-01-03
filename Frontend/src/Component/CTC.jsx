import React from 'react';
import { RiVideoAiLine } from 'react-icons/ri';
import chatbotImage from '../assets/ChatbotImage.svg';

const CTC = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row py-12 px-6 md:px-16 lg:px-24"> 
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-color">See It In Action</h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500">
          Ready to see our chatbot in action? Try it yourself.
        </p>
        <button className="flex justify-center items-center text-white bg-blue-800 border border-blue-800 px-4 py-2 sm:px-5 sm:py-3 rounded-md gap-2">
          Try the Demo <span className="text-xl"><RiVideoAiLine /></span>
        </button>
      </div> 
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <img 
          className="w-10/12 sm:w-8/12 md:w-full max-w-sm md:max-w-md lg:max-w-lg" 
          src={chatbotImage} 
          alt="Chatbot Demo" 
        />
      </div>
    </div>
  );
};

export default CTC;

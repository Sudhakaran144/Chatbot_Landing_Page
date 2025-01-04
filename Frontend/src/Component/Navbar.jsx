import React, { useState } from 'react';
import logo from '../assets/chatbot.png';
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open ,setOpen] = useState(false)

  const handleMenu = () => {
    setOpen((prev)=>!prev)
  }
  return (
    <div className=' relative w-full'>
        
        {
          open ? 
          <div className=" w-full  bg-white/30 backdrop-blur-md backdrop-brightness-125 shadow-lg fixed flex font-semibold text-navitemColor text-xl items-end justify-end flex-col gap-4 pr-10 py-4">
            <div className="flex items-center space-x-2 absolute left-4 top-4">
                  <img src={logo} alt="Chatbot Logo" className="h-8 w-8" />
                  <h1 className="text-xl font-poppins font-semibold text-gray-800">BOT.AI</h1>
            </div>
            <div className=' text-2xl md:hidden cursor-pointer ' onClick={handleMenu}>
              <RxCross2 />
            </div> 
            <a href="#home" className="hover:text-gray-800">Home</a>
            <a href="#features" className="hover:text-gray-800">Features</a>
            <a href="#pricing" className="hover:text-gray-800">Pricing</a>
            <a href="#contact" className="hover:text-gray-800">Contact</a>
            <div className=" md:flex space-x-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-poppins">
                    Try Now
                  </button>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white font-poppins">
                    Sign Up
                  </button>
                </div>
          </div>
          :
          (
            <nav className=" w-full mt-6 mb-6  px-6 bg-transparent top-5 max-sm:px-2 max-md:mb-0">
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
                <div className=' text-2xl md:hidden cursor-pointer ' onClick={handleMenu}>
                  <BiMenuAltRight  />
                </div> 
                
              </div> 
            </nav>
          )

        }
        
    </div>
  );
};

export default Navbar;

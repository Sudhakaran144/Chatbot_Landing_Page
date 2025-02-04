import React from 'react'
import product from '../assets/Product.svg'
import Search_Product from '../assets/Search_Product.svg'
import Assistance from '../assets/Assistance.svg'
import Personlized from '../assets/personlized.svg'
import { FaCaretDown } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className='w-full h-auto bg-white flex flex-col gap-20 max-md:gap-6 py-16 max-md:py-10'>
        <div className='w-full h-auto  flex flex-col  gap-4'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl   text-center text-color'>How It Works</h1>
            <p className=' text-lg text-center max-sm:px-2 font-medium text-gray-500'>See how our AI chatbot can simplify your customer service</p>
        </div>
        <div className='w-full h-customTimelineHeight flex flex-col gap-10 pt-10 relative max-md:hidden'>
          <span className='w-2px h-customTimelineHeight bg-customColor absolute left-[50%] bottom-4' ></span>
          <span className=' text-color text-2xl absolute left-[49.3%] bottom-2 '><FaCaretDown /></span>
          <span className=' text-color text-2xl absolute left-[49.3%] bottom-[100.5%] '><FaCaretDown /></span>
          <div className='w-full max-w-screen-lg absolute left-1/2 transform -translate-x-1/2 flex flex-col'>
          <div className='flex items-center gap-[140px] space-x-2 pl-4 '>
            <div className='w-80 h-auto bg-mainColor rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
              <h1 className='text-lg font-semibold text-green-800'>Easy Integration</h1>
                <img src={product} alt="" />
              <p className='w-5/6 text-center font-medium text-gray-600'>Set up our AI chatbot on your website or store systems in minutes.</p>
            </div>
            <div className=' w-14 h-14 bg-customColor flex justify-center items-center   rounded-full '>
              <p className='text-2xl text-white'>1</p>
            </div>
          </div >
          <div className='flex items-center gap-[140px] space-x-2 pr-4 justify-end'>
            <div className=' w-14 h-14 bg-customColor flex justify-center items-center   rounded-full '>
              <p className='text-2xl text-white'>2</p>
            </div>
            <div className='w-80 h-auto bg-mainColor rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
              <h1 className='text-lg font-semibold text-green-800'>Product Search</h1>
                <img src={Search_Product} alt="" />
              <p className='w-5/6 text-center font-medium text-gray-600'>Customers ask, and the chatbot quickly finds the right product or provides guidance.</p>
            </div>
          </div>
          <div className='flex items-center gap-[140px] space-x-2 pl-4'>
            <div className='w-80 h-auto bg-mainColor rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
              <h1 className='text-lg font-semibold text-green-800'>Personalized Advice</h1>
                <img src={Personlized} alt="" />
              <p className='w-11/12 text-center font-medium text-gray-600'>From recommending the perfect tools to DIY projects, our AI tailors responses to each customer.</p>
            </div>
            <div className=' w-14 h-14 bg-customColor flex justify-center items-center   rounded-full '>
              <p className='text-2xl text-white'>3</p>
            </div>
          </div >
          <div className='flex items-center space-x-2 pr-4 gap-[140px]  justify-end'>
            <div className=' w-14 h-14 bg-customColor flex justify-center items-center   rounded-full '>
              <p className='text-2xl text-white'>4</p>
            </div>
            <div className='w-80 h-auto bg-mainColor rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
              <h1 className='text-lg font-semibold text-green-800'> 24/7 Assistance</h1>
                <img src={Assistance} alt="" />
              <p className='w-5/6 text-center font-medium text-gray-600'>The chatbot works around the clock, helping customers whenever they need it.</p>
            </div>
          </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-10 relative md:hidden'> 
          <div className='w-full max-w-screen-lg  flex flex-col gap-10'>
            <div className=' flex items-center  gap-4 flex-col '>
              <div className=' w-14 h-14 bg-customColor flex justify-center items-center   rounded-full '>
                  <p className='text-2xl text-white'>1</p>
              </div>
              <div className='w-72 h-auto bg-mainColor rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
                <h1 className='text-lg font-semibold text-green-800'>Easy Integration</h1>
                  <img src={product} alt="" />
                <p className='text-center font-medium text-gray-600'>Set up our AI chatbot on your website or store systems in minutes.</p>
              </div>
              
            </div >
            <div className='flex items-center gap-4 flex-col'>
              <div className=' w-14 h-14 bg-customColor flex justify-center items-center   rounded-full '>
                <p className='text-2xl text-white'>2</p>
              </div>
              <div className='w-72 h-auto bg-mainColor rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
                <h1 className='text-lg font-semibold text-green-800'>Product Search</h1>
                  <img src={Search_Product} alt="" />
                <p className='text-center font-medium text-gray-600'>Customers ask, and the chatbot quickly finds the right product or provides guidance.</p>
              </div>
            </div>
            <div className='flex items-center gap-4 flex-col'>
            <div className=' w-14 h-14 bg-customColor flex justify-center items-center   rounded-full '>
                <p className='text-2xl text-white'>3</p>
              </div>
              <div className='w-72 h-auto bg-mainColor rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
                <h1 className='text-lg font-semibold text-green-800'>Personalized Advice</h1>
                  <img src={Personlized} alt="" />
                <p className='text-center font-medium text-gray-600'>From recommending the perfect tools to DIY projects, our AI tailors responses to each customer.</p>
              </div>
              
            </div >
            <div className='flex items-center gap-4 flex-col'>
              <div className=' w-14 h-14 bg-customColor flex justify-center items-center   rounded-full '>
                <p className='text-2xl text-white'>4</p>
              </div>
              <div className='w-72 h-auto bg-mainColor rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
                <h1 className='text-lg font-semibold text-green-800'> 24/7 Assistance</h1>
                  <img src={Assistance} alt="" />
                <p className=' text-center font-medium text-gray-600'>The chatbot works around the clock, helping customers whenever they need it.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Timeline
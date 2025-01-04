import React from 'react'
import BotFeatures from '../assets/Bot.png' 
import customer from '../assets/Customer.svg'

const Features = () => {
  return (
     <div className='w-full py-16 flex flex-col gap-20 max-lg:gap-0 max-md:py-10 '>
        <div className='w-full h-auto  flex flex-col  gap-4'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-center text-color'>Why Choose Our Chatbot?</h1>
            <p className=' text-lg text-center font-medium max-sm:px-2 text-gray-500'>Explore the intelligent features that make our chatbot the perfect solution for your hardware store.</p>
        </div>
        <div className='w-full h-auto flex items-center justify-center relative max-lg:flex-col '>
            <div className=' absolute max-lg:static '>
                <img className=' relative left-8 w-10/12 drop-shadow-muted-green' src={BotFeatures} alt="" />
            </div>
            <div className='w-8/12 items-center flex flex-col gap-40 max-lg:justify-between max-lg:w-full max-lg:px-4 max-lg:gap-20 max-md:gap-10 max-xl:w-10/12 max-xl:justify-between'>
                <div className='w-full flex justify-between items-start max-lg:justify-around max:lg:px-4 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-10 '>
                    <div className='w-96 h-[252px] max-xl:w-80 max-sm:w-72  bg-white rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg '>
                        <img src={customer} alt="" />
                        <h1 className='text-lg max-lg:text-base font-semibold text-green-800'>Natural Language Understanding</h1>
                        <p className='w-5/6 max-sm:w-full text-center  font-medium text-gray-600'> Our AI can understand customer questions in every language, ensuring quick and accurate responses.</p>
                    </div>
                    <div className='w-96 max-xl:w-80 h-auto max-sm:w-72 bg-white rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
                        <img src={customer} alt="" />
                        <h1 className='text-lg max-lg:text-base font-semibold text-green-800'> Product Recommendation</h1>
                        <p className='w-5/6 max-sm:w-full text-center font-medium text-gray-600'> Guide customers to the right products in seconds with smart search and personalized suggestions.</p>
                    </div>
                </div>
                <div className='w-full flex justify-between items-start max-lg:justify-around max:lg:px-4 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-10'>
                    <div className='w-96 max-xl:w-80 h-auto max-sm:w-72 bg-white rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
                        <img src={customer} alt="" />
                        <h1 className='text-lg max-lg:text-base font-semibold text-green-800'>Project Assistance</h1>
                        <p className='w-5/6 max-sm:w-full text-center font-medium text-gray-600'> Provide detailed, step-by-step advice for DIY and professional projects with our intelligent assistant.</p>
                    </div>
                    <div className='w-96 max-xl:w-80 h-auto max-sm:w-72 max-lg:h-[252px] bg-white rounded-2xl px-4 py-6 flex flex-col items-center justify-center gap-3 shadow-lg'>
                        <img src={customer} alt="" />
                        <h1 className='text-lg max-lg:text-base font-semibold text-green-800'>Multi-Channel Support</h1>
                        <p className='w-5/6 max-sm:w-full text-center font-medium text-gray-600'>Offer customer support across web, mobile, and in-store kiosks all powered by the same AI.</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Features
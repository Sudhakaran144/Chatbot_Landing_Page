import React from 'react'
import guide from '../assets/guide.svg'
import integration from '../assets/Integration.svg'
import support from '../assets/Support.svg'
import customer from '../assets/Customer.svg'

const Benift = () => {
  return (
    <div className='w-full h-auto bg-white flex flex-col py-16'>
        <h1 className='font-bold text-5xl text-center text-color'>Unlock the Benefits of Our Chatbot</h1>
        <div className=" w-full flex items-center justify-center gap-8 pt-20">
          {/* Product Assistance */}
          <div className='w-1/5 flex items-start justify-between'>
            <span className='w-2px h-customHeight bg-customLinear'></span>
            <div className="w-11/12 flex flex-col items-start text-center">
              <div className= "w-3/12 bg-green-100 p-4 rounded-full mb-4">
                <img   src={customer} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Product Assistance</h3>
              <p className="text-start w-5/6  font-medium text-gray-600">
                Help your customers find what they need faster with our AI-driven product search.
              </p>
            </div>
          </div>
          

          {/* Easy Integration */}
          <div className='w-1/5 flex items-end justify-between'>
            <span className='w-2px h-customHeight bg-customLinear'></span>
            <div className="w-11/12 flex flex-col items-start text-center">
              <div className= "w-3/12 bg-green-100 p-4 rounded-full mb-4">
                <img   src={integration} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Easy Integration</h3>
              <p className="text-start w-5/6 font-medium text-gray-600">
              Seamlessly integrates with your existing systems, ready to enhance your store's digital experience.
              </p>
            </div>
          </div> 

          {/* Customer Support */}
          <div className='w-1/5 flex items-start justify-between'>
            <span className='w-2px h-customHeight bg-customLinear'></span>
            <div className="w-11/12 flex flex-col items-start text-center">
              <div className= "w-3/12 bg-green-100 p-4 rounded-full mb-4">
                <img   src={support} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Customer Support</h3>
              <p className="text-start w-5/6 font-medium text-gray-600">
                Never miss a query—our chatbot is always available to assist, anytime, anywhere.
              </p>
            </div>
          </div> 

          {/* Project Guidance */}
          <div className='w-1/5 flex items-end justify-between'>
            <span className='w-2px h-customHeight bg-customLinear'></span>
            <div className="w-11/12 flex flex-col items-start text-center">
              <div className= "w-3/12 bg-green-100 p-4 rounded-full mb-4">
                <img   src={guide} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Project Guidance</h3>
              <p className="text-start w-5/6 font-medium text-gray-600">
                Offer tailored advice for DIY and professional projects, guiding customers step-by-step.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Benift
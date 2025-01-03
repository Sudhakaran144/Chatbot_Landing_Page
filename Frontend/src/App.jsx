import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Benift from './Component/Benift'
import Features from './Component/Features'
import CTC from './Component/CTC'
import Demo from './Component/Demo'
import Timeline from './Component/Timeline'
import Testimonials from './Component/Testimonials'
import Footer from './Component/Footer'
 

const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-mainColor'>
      <Navbar />
      <Hero />
      <Benift />
      <Features />
      <Timeline />
      <CTC />
      <Testimonials />  
      <Demo />
      <Footer />
    </div>
  )
}

export default App
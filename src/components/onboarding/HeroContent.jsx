import React from 'react'
import { PiForkKnifeFill } from "react-icons/pi";
import { PiTruck } from "react-icons/pi";
import Logo from '../ui/Logo'
import { Link } from 'react-router-dom';

export default function HeroContent() {
  return (
    <div className='px-16 mb-10'>
      <div className='items-center flex justify-between mt-4'>
        <Logo/>
        <Link to={"/sign-in"} className='text-[#1e88e5] border-2 border-[#1e88e5] px-6 py-2.5 text-sm rounded-lg font-semibold bg-white transition-all hover:bg-[#1e88e5] hover:text-white ease-in-out duration-300'>Sign In</Link>
      </div>

      <div className='mt-20'>
        <h2 className='text-3xl font-bold'>Your Authentic Taste of Nigeria</h2>
        <p className='text-sm font-semibold py-6 text-[#1f2937]'>
          Experience homemade flavors delivered fresh to your desk or home. 
          We bring the rich culinary heritage of Nigeria right to your doorstep.
        </p>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex gap-3 items-center'>
            <span className='bg-[#ffe1c4] text-[#ff7a18] rounded-lg px-2 py-2 text-2xl'><PiForkKnifeFill /></span>
            <span className='text-sm font-semibold text-[#1f2937]'>Freshly Prepared</span>
          </div>
          <div className='flex gap-3 items-center'>
            <span className='bg-[#ffe1c4] text-[#ff7a18] rounded-lg px-2 py-2 text-2xl'><PiForkKnifeFill /></span>
            <span className='text-sm font-semibold text-[#1f2937]'>Support Local Business</span>
          </div>
          <div className='flex gap-3 items-center'>
            <span className='bg-[#ffe1c4] text-[#ff7a18] rounded-lg px-2 py-2 text-2xl'><PiTruck /></span>
            <span className='text-sm font-semibold text-[#1f2937]'>Fast and Reliable Delivery</span>
          </div>
        </div>

        <div className='mb-4 mt-10 space-y-6'>
          <Link to={"/sign-in"} className='block bg-[#ff7a18] text-white text-[16px] rounded-lg w-full py-3 text-center font-semibold transition-all hover:bg-[#e66a0f] hover:-translate-y-1 ease-in-out duration-500'>Start Your Order</Link>

          <Link to={"/sign-in"} className='w-full block text-[#1e88e5] border-2 border-[#1e88e5] py-3 text-[16px] rounded-lg text-center font-semibold bg-white transition-all hover:bg-[#1e88e5] hover:text-white ease-in-out duration-500 hover:-translate-y-1'>Learn More About Us</Link>
        </div>
        
      </div>
      

      <div className=' mt-12'>
        <div className='w-full bg-[#323b3b1a] h-[0.5px] mx-auto'></div>
        <div className='flex gap-2 mt-3 text-sm justify-center items-center text-center'>
          <p>© 2024 Chuks Kitchen.</p>
          <Link className='text-[#64b5f6] font-semibold transition-colors hover:text-[#1e88e5] duration-500'>Privacy Policy</Link>
          <Link className='text-[#64b5f6] font-semibold transition-colors hover:text-[#1e88e5] duration-500'>Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}

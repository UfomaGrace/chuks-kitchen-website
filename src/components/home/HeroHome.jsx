import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

export default function HeroHome() {
  return (
    <div className='relative'>
        <img src="/images/Home-Image1.png" alt="Home Image" className='w-full max-h-screen object-cover'/>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-0 bg-black/40"></div>
        
        <div className='absolute inset-0 top-1/3 text-white px-18 max-w-4xl'>
            <h1 className='text-5xl font-bold'>The Heart of Nigerian Home Cooking</h1>
            <p className='mt-6 font-semibold text-xl'>Handcrafted with passion, delivered with care.</p>
            <button className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-[#FF7A18] to-[#FF9A3D] rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7A18] cursor-pointer">
                Discover what's new
            </button>
        </div>

        <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-[90%] md:w-[66%]">
            <div className="flex items-center bg-white rounded-md shadow-lg px-4 py-3 border border-gray-200">
          
                {/* Icon */}
                <IoSearchOutline className="text-gray-500 text-xl mr-3" />

                {/* Input */}
                <input
                    type="text"
                    placeholder="What are you craving for today?"
                    className="w-full outline-none text-sm text-gray-700 placeholder:text-[#1F2937] placeholder:font-semibold"
                />
            </div>
        </div>
    </div>
  )
}

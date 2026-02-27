import React from 'react'

export default function NewMenuCTA() {
  return (
    <div className='relative  h-screen lg:h-125'> 
        <img src="/images/HomeImage2.png" alt="New Menu" className='w-full h-full object-cover'/>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-0 bg-black/40"></div>

        <div className='absolute inset-0 md:top-1/3 top-1/4 text-white lg:px-18 px-6 max-w-4xl'>
            <h1 className='text-3xl lg:text-5xl font-bold'>Introducing Our New Menu Additions!</h1>
            <p className='mt-4 lg:mt-6 font-semibold text-lg lg:text-xl'>
                Explore exciting new dishes, crafted with the freshest
                ingredients and authentic Nigerian flavors. Limited time
                offer!
            </p>
            <button className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-[#FF7A18] to-[#FF9A3D] rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7A18] cursor-pointer">
                Discover what's new
            </button>
        </div>
    </div>
  )
}

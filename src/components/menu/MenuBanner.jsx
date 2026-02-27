import React from 'react'

export default function MenuBanner() {
  return (
    <div className='relative h-screen lg:h-125'>
        <img src="/images/menu-banner.png" alt="Menu Banner" className='w-full h-full object-cover '/>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-0 bg-black/50"></div>

        <div className='absolute inset-0 md:top-1/3 top-1/2 text-white lg:px-18 px-6 max-w-4xl'>
          <h1 className='text-3xl lg:text-5xl font-bold'>Chuks Kitchen</h1>
          <p className='mt-4 lg:mt-6 font-semibold text-lg lg:text-xl'>Chuks  Kitchen Nigerian Home Cooking 4.8  (1.2k)</p>
        </div>
    </div>
  )
}

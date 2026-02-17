import React from 'react'
import HeroImage from '../ui/HeroImage'

export default function SignInImage() {
  return (
    <div className='relative w-full'>
      <HeroImage/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-400/60"></div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className='text-white items-center text-center justify-center'>
          <h1 className='text-3xl font-bold mb-3'>Chuks Kitchen</h1>
          <p className='max-w-3xs'>
            Your journey to delicious, authentic Nigerian meals starts here. 
            Sign up or log in to order your favorites today!
          </p>
        </div>
      </div>
    </div>
  )
}

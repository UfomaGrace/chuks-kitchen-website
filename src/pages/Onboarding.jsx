import React from 'react'
import HeroImage from '../components/onboarding/HeroImage'
import HeroContent from '../components/onboarding/HeroContent'
import Footer from '../layout/Footer'

export default function Onboarding() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <HeroImage/>
        <HeroContent/>
      </div>
      <Footer/>
    </div>
  )
}

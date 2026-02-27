import React from 'react'
import HeroContent from '../components/onboarding/HeroContent'
import Footer from '../layout/Footer'
import HeroImage from '../components/ui/HeroImage'

export default function Onboarding() {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='hidden lg:block'>
          <HeroImage />
        </div>
        <div>
          <HeroContent/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

import React from 'react'
import AuthLayout from '../components/ui/AuthLayout'
import SignUpContent from '../components/sign-up/SignUpContent'
import Footer from '../layout/Footer'

export default function SignUp() {
  return (
    <div>
        <div className='grid grid-cols-2'>
            <AuthLayout/>
            <SignUpContent/>
        </div>
        <Footer/>
    </div>
  )
}

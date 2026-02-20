import React from 'react'
import SignInContent from '../components/sign-in/SignInContent'
import Footer from '../layout/Footer'
import AuthLayout from '../components/ui/AuthLayout'

export default function SignIn() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <AuthLayout/>
        <SignInContent/>
      </div>
      <Footer/>
    </div>
  )
}

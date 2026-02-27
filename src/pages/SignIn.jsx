import React from 'react'
import SignInContent from '../components/sign-in/SignInContent'
import Footer from '../layout/Footer'
import AuthLayout from '../components/ui/AuthLayout'

export default function SignIn() {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='hidden lg:block'><AuthLayout/></div>
        <SignInContent/>
      </div>
      <Footer/>
    </div>
  )
}

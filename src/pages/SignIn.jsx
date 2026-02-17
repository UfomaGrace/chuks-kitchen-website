import React from 'react'
import SignInImage from '../components/sign-in/SignInImage'
import SignInContent from '../components/sign-in/SignInContent'
import Footer from '../layout/Footer'

export default function SignIn() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <SignInImage/>
        <SignInContent/>
      </div>
      <Footer/>
    </div>
  )
}

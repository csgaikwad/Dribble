import React from 'react'
import EmailVerification from './subComponents/EmailVerification'
import Navbar from './subComponents/Navbar'
import Footer from './subComponents/Footer'

export default function VerifyEmail() {
  return (
    <div className='min-h-screen w-screen '>
      <Navbar/>
      <EmailVerification/>
      <Footer/>
    </div>
  )
}

import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import '../SignPage/Signpage.css'

const Signinpage = () => {
  return (
    <div className='signinpage'>
    <SignIn path='/sign-in' signUpUrl='/sign-up' forceRedirectUrl="/dashboard"/>      
    </div>
  )
}

export default Signinpage

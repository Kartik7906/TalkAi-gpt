import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUppage = () => {
  return (
    <div className='signuppage'>
    <SignUp path='/sign-up' signInUrl='/sign-in'/>
      
    </div>
  )
}

export default SignUppage

import React from 'react'
import Signup from '../../assets/images/illustration-sign-up-mobile.svg'
import SignupFull from '../../assets/images/illustration-sign-up-desktop.svg'

function Image() {
  return (
    <>
      <div id="imageContainer">
        <img src={Signup} alt="Signup" className='w-full xl:hidden' />
        <img src={SignupFull} alt="Signup" className='hidden xl:block' />
      </div>
    </>
  )
}

export default Image
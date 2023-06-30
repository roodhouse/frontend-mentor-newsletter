import React from 'react'
import Signup from '../../assets/images/illustration-sign-up-mobile.svg'

function Image() {
  return (
    <>
      <div id="imageContainer">
        <img src={Signup} alt="Signup" className='w-full' />
      </div>
    </>
  )
}

export default Image
import React from 'react'
import Image from './main/Image'
import Body from './main/Body'
import Form from './main/Form'

function Main() {
  return (
    <>
      <div id="mainContainer">
        <div id="imageWrapper" className='mb-10'>
          <Image />
        </div>
        <div id="bodyWrapper" className='mb-10'>
          <Body />
        </div>
        <div id="formWrapper" className='mb-10'>
          <Form />
        </div>
      </div>
    </>
  )
}

export default Main
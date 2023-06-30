import React from 'react'
import Image from './main/Image'
import Body from './main/Body'
import Form from './main/Form'

function Main({changeEmail}) {
  
  return (
    <>
      <div id="mainContainer" className='xl:flex xl:flex-col xl:flex-wrap xl:h-full'>
        <div id="imageWrapper" className='mb-10 xl:order-3'>
          <Image />
        </div>
        <div id="bodyWrapper" className='mb-10 px-6 xl:order-1'>
          <Body />
        </div>
        <div id="formWrapper" className='mb-10 px-6 xl:order-2'>
          <Form changeEmail={changeEmail}/>
        </div>
      </div>
    </>
  )
}

export default Main
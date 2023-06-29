import React from 'react'

function ThanksBody() {
  return (
    <>
      <div id="thanksBodyContainer">
        <div id="thanksHeading" className='mb-6 font-Roboto text-4xl font-bold leading-[100%] text-darkSlateGray'>
          <h1>Thanks for subscribing!</h1>
        </div>
        <div id="thanksText" className='font-Roboto text-base font-normal text-darkSlateGray leading-[150%]'>
        <p>A confirmation email has been sent to <span id='userEmail' className='font-bold'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription</p>
        </div>
      </div>
    </>
  )
}

export default ThanksBody
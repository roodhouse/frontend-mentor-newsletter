import React from 'react'

function ThanksBody() {
  return (
    <>
      <div id="thanksBodyContainer">
        <div id="thanksHeading" className='mb-6'>
          <h1>Thanks for subscribing!</h1>
        </div>
        <div id="thanksText">
        <p>A confirmation email has been sent to <span id='userEmail'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription</p>
        </div>
      </div>
    </>
  )
}

export default ThanksBody
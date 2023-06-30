import React from 'react'
import ThanksIcon from '../components/thanks/ThanksIcon'
import ThanksBody from '../components/thanks/ThanksBody'
import ThanksForm from '../components/thanks/ThanksForm'

function Thanks({userEmail}) {
  
  return (
    <>
      <div id="thanksContainer" className='pt-[149px] px-6 pb-10'>
        <div id="thanksIconWrapper" className='mb-10'>
          <ThanksIcon />
        </div>
        <div id="thanksBodyWrapper" className='mb-[263px]'>
          <ThanksBody userEmail={userEmail} />
        </div>
        <div id="thanksFormWrapper">
          <ThanksForm />
        </div>
      </div>
    </>
  )
}

export default Thanks
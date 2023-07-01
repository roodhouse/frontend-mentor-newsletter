import React from 'react'
import ThanksIcon from '../components/thanks/ThanksIcon'
import ThanksBody from '../components/thanks/ThanksBody'
import ThanksForm from '../components/thanks/ThanksForm'

// need to move the width and height property from main wrapper to wrapper for the 2 components and adjust accordingly

function Thanks({userEmail}) {
  
  return (
    <>
      <div id="thanksContainer" className='pt-[149px] px-6 pb-10 xl:pt-12 xl:pb-[64px] xl:px-[64px]'>
        <div id="thanksIconWrapper" className='mb-10'>
          <ThanksIcon />
        </div>
        <div id="thanksBodyWrapper" className='mb-[263px] xl:mb-10'>
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
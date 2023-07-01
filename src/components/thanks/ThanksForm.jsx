import React from 'react'

function ThanksForm() {
  return (
    <>
      <div id="thanksFormContainer">
        <form>
          <div id="dismissContainer" className='cursor-pointer bg-darkSlateGray text-white rounded-[8px] flex justify-center items-center py-[18px] hover:bg-tomato hover:shadow-[0px_16px_32px_0px_rgba(255,97,85,0.50);]'>
            <input type="submit" id='dismissSubmit' name='dismissSubmit' value='Dismiss message' className='cursor-pointer' />
          </div>
        </form>
      </div>
    </>
  )
}

export default ThanksForm
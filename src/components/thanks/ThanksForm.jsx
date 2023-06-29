import React from 'react'

function ThanksForm() {
  return (
    <>
      <div id="thanksFormContainer">
        <form>
          <div id="dismissContainer" className='cursor-pointer bg-darkSlateGray text-white rounded-[8px] flex justify-center items-center py-[18px]'>
            <input type="submit" id='dismissSubmit' name='dismissSubmit' value='Dismiss message' />
          </div>
        </form>
      </div>
    </>
  )
}

export default ThanksForm
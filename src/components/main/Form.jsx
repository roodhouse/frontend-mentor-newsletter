import React from 'react'

function Form() {
  return (
    <>
      <div id="formContainer">
        <div id="emailHead" className='font-Roboto text-xs font-bold leading-[150%] text-darkSlateGray mb-2 flex justify-between'>
          <p>Email address</p>
          <p className='text-tomato invisible'>Valid Email Required</p>
        </div>
        <div id="form">
          <form>
            <div id="emailInputContainer" className='mb-6 rounded-[8px] border border-solid border-[rgba(25,24,43,0.25)] w-full'>
              <input type="email" id='email' name='email' placeholder='email@company.com' className='w-full py-4 pl-6 rounded-[8px]' />
            </div>
            <div id="submitContainer" className='cursor-pointer bg-darkSlateGray text-white rounded-[8px] flex justify-center items-center py-[18px]'>
              <input type="submit" id='submit' name='submit' value='Subscribe to monthly newsletter' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
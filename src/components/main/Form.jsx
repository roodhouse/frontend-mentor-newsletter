import React from 'react'

function Form() {
  return (
    <>
      <div id="formContainer">
        <div id="emailHead">
          <p>Email address</p>
        </div>
        <div id="form">
          <form>
            <div id="emailInputContainer">
              <input type="email" id='email' name='email' placeholder='email@company.com' />
            </div>
            <div id="submitContainer">
              <input type="submit" id='submit' name='submit' value='Subscribe to monthly newsletter' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
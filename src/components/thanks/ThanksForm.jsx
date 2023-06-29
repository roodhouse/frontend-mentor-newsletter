import React from 'react'

function ThanksForm() {
  return (
    <>
      <div id="thanksFormContainer">
        <form>
          <div id="dismissContainer">
            <input type="submit" id='dismissSubmit' name='dismissSubmit' value='Dismiss message' />
          </div>
        </form>
      </div>
    </>
  )
}

export default ThanksForm
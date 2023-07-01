import React, { useState } from 'react'
import './App.css';
import Main from '../src/components/Main'
import Thanks from '../src/components/Thanks'

function App() {
  // declare state for entire app
  const [userEmail, setUserEmail] = useState('');
  // define function to pass to child that will update the state for the entire app
  const changeEmail = (newEmail) => {
    setUserEmail(newEmail)
  }
  
  return (
    <div className="App bg-[#36384D] flex justify-center">
      <div id='wrapper' className='max-w-[640px] bg-white xl:max-w-[928px] xl:w-[928px] xl:mt-[10%] xl:mb-[17%] xl:rounded-[36px] xl:p-6 xl:h-[641px]'>
        <div id='mainWrapper' className='xl:h-[641px]'>
          <Main changeEmail={changeEmail} />
        </div>
      </div>
      <div id='thanksPrimaryWrapper' className='bg-white hidden xl:w-[504px] xl:h-[520px] xl:rounded-[36px] xl:mt-[200px] xl:mb-[300px]'>
          <div id='thanksWrapper' className=''>
            <Thanks userEmail={userEmail} />
          </div>
      </div>

    </div>
  );
}

export default App;

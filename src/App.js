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
      <div id='wrapper' className='max-w-[640px] bg-white'>
        <div id='mainWrapper' className=''>
          <Main changeEmail={changeEmail} />
        </div>
        <div id='thanksWrapper' className='hidden'>
          <Thanks userEmail={userEmail} />
        </div>
      </div>
    </div>
  );
}

export default App;

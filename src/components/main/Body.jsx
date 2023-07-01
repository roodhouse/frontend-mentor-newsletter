import React from 'react'
import CheckMark from '../../assets/images/icon-list.svg'

function Body() {
  return (
    <>
      <div id="bodyContainer">
        <div id="heading" className='text-darkSlateGray font-Roboto text-4xl font-bold leading-[100%] mb-6 xl:text-[56px]'>
          <h1>Stay updated!</h1>
        </div>
        <div id="text" className='mb-6 text-darkSlateGray font-Roboto text-base leading-[150%] font-normal'>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div id="list">
          <ul className='text-darkSlateGray font-Roboto font-normal leading-[150%]'>
            <li className='mb-[10px] flex items-center xl:mb-0 xl:items-start'><span className='checkmark mr-4'><img src={CheckMark} alt="Check"  className='mb-[20px]'/></span>Product discovery and building what matters</li>
            <li className='mb-[10px] flex items-center xl:mb-0 xl:items-start'><span className='checkmark mr-4'><img src={CheckMark} alt="Check"  className='mb-[20px]'/></span>Measuring to ensure updates are a success</li>
            <li className='flex items-center xl:items-start'><span className='checkmark mr-4'><img src={CheckMark} alt="Check"  className=''/></span>And much more!</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Body
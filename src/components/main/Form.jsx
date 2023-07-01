import React from 'react';
import { useForm } from 'react-hook-form';

function Form({changeEmail}) {
  
  const { register, resetField, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      email: ''
    }
  })

  function onSubmit(data) {
    resetField('email');
    const main = document.getElementById('wrapper')
    const thanks = document.getElementById('thanksPrimaryWrapper')
    thanks.style.display = "block";
    main.style.display = 'none';
    changeEmail(data.email)
  }

  function onError(e) {
    
    let errorMessage = document.getElementById('errorMessage')
    let emailInputContainer = document.getElementById('emailInputContainer');
    console.log(emailInputContainer);
    emailInputContainer.style.borderColor = '#FF6155'
    emailInputContainer.style.color = '#FF6155'
    emailInputContainer.firstChild.style.background = 'hsl(4, 100%, 67%, 0.1)'
    errorMessage.style.visibility = 'visible' 
    emailInputContainer.addEventListener('input', function(){
      // change the style back to normal when a user begins to change the input
      emailInputContainer.style.color = '#000';
      emailInputContainer.firstChild.style.background = '#fff';
      emailInputContainer.style.borderColor = 'rgba(25,24,43,0.25)'
    })
  }

  return (
    <>
      <div id="formContainer">
        <div id="emailHead" className='font-Roboto text-xs font-bold leading-[150%] text-darkSlateGray mb-2 flex justify-between'>
          <p>Email address</p>
          <p id='errorMessage' className='text-tomato invisible'>{errors.email?.message}</p>
        </div>
        <div id="form">
          <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <div id="emailInputContainer" className='mb-6 rounded-[8px] border border-solid border-[rgba(25,24,43,0.25)] w-full'>
              <input type="email" id='email' name='email' placeholder='email@company.com' className='w-full py-4 pl-6 rounded-[8px]' 
                {...register('email', {
                  required: 'Yo! Add your email!',
                  pattern: {
                    value:  /\w+@\w+\.\w{2,3}/,
                    message: 'Vaild email required'
                  }
                })}
              />
            </div>
            <div id="submitContainer" className='cursor-pointer bg-darkSlateGray text-white rounded-[8px] flex justify-center items-center py-[18px] hover:bg-tomato hover:shadow-[0px_16px_32px_0px_rgba(255,97,85,0.50);]'>
              <input type="submit" id='submit' name='submit' value='Subscribe to monthly newsletter' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
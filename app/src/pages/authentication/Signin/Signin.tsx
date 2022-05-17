import React, { useRef } from 'react';
import CustomInput from '../../../components/ui/AuthInput/CustomInput';

const Signin:React.FC = () => {
  
  const inputEmail = useRef<any>("");;
  const inputPassword = useRef<any>("");

  const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className='bg-navBar-bg md:py-[3rem] py-4 md:px-[6rem] px-[1rem] rounded-md shadow-md'>
      <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
        <h1 className='font-medium text-[20px] text-white'>Welcome Back, Get Login</h1>
        <p className='text-gray mb-4 text-[12px] mt-2'>Join your account, Don't have Account? <span onClick={() => {}} className=' text-main-color'>Create Account</span></p>
        <div className='py-[1rem] w-full'>
          <CustomInput useRef={inputEmail} type='email' label='Email' id='email' placeholder='exemple@email.com'/>
          <CustomInput useRef={inputPassword} type='password' label='Password' id='password' placeholder='***********'/>
        </div>
        <div className='flex flex-row justify-between items-center mt-5 w-full px-2'>
          <button type='submit' className='py-3 px-2 md:w-[60%] bg-main-color rounded-sm'>Sign in</button>
          <p className='text-gray text-[12px]'>Forget Password?</p>
        </div>
      </form>
    </div>
  )
}

export default Signin
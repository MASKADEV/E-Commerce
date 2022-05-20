import React, { useRef } from 'react';
import { CloseIcon } from '../../../components/icons/close-icon';
import CustomInput from '../../../components/ui/AuthInput/CustomInput';
import { AuthProps } from '../../../types';

const Signin:React.FC<AuthProps> = ({show, setShow, showAuth, setAuth}) => {
  
  const inputEmail = useRef<any>("");;
  const inputPassword = useRef<any>("");

  const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className='bg-navBar-bg md:py-[3rem] py-4 md:px-[6rem] px-[1rem] rounded-md shadow-md'>
      
      <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-between w-full items-center'>
          <h1 className='font-medium text-[20px] text-white'>Welcome Back, Get Login</h1>
          <CloseIcon onClick={() => {setAuth(!showAuth)}} className='text-gray h-[1.4rem] cursor-pointer'/>
        </div>
        <p className='text-gray mb-1 text-[12px] mt-2'>Join your account, Don't have Account? <span onClick={() => {setShow(!show)}} className=' text-main-color cursor-pointer'> Create Account</span></p>
        <div className='py-[0.5rem] w-full'>
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
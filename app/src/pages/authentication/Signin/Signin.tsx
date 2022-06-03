import React, { useRef } from 'react';
import { CloseIcon } from '../../../components/icons/close-icon';
import CustomInput from '../../../components/ui/authInput/CustomInput';
import { AuthProps } from '../../../types';
import axios from 'axios';
import GlobalVarialble from '../../../config/Constant';

const Signin:React.FC<AuthProps> = ({show, setShow, showAuth, setAuth}) => {
  
  const inputEmail = useRef<any>("");;
  const inputPassword = useRef<any>("");

  const onSubmit = async (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let {data} = await axios.post(GlobalVarialble.url + '/auth/signin', JSON.stringify({
      'email' : inputEmail.current.value,
      'password' : inputPassword.current.value,
      },));
    
    if(data['status'] === '200'){
      localStorage.setItem('token', data['body']);
      window.location.reload();
    }else {
      alert(data['status']);
    }
    
    
  }

  return (
    <div className='bg-navBar-bg md:py-[3rem] py-4 md:px-[6rem] px-[1rem] rounded-md shadow-md'>
      
      <form className='flex flex-col justify-center items-center'>
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
          <button onClick={onSubmit} className='py-3 px-2 md:w-[60%] bg-main-color rounded-sm'>Sign in</button>
          <p className='text-gray text-[12px]'>Forget Password?</p>
        </div>
      </form>
    </div>
  )
}

export default Signin
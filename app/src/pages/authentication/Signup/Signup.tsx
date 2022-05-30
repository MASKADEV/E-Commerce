import React, {useRef, useState} from 'react'
import { CloseIcon } from '../../../components/icons/close-icon';
import CustomInput from '../../../components/ui/authInput/CustomInput';
import { AuthProps } from '../../../types';
import axios from 'axios';
import GlobalVarialble from '../../../config/constants/Constant';


const Signup:React.FC<AuthProps> = ({show, setShow, showAuth, setAuth}) => {
  
  const inputFullName = useRef<any>("");;
  const inputEmail = useRef<any>("");;
  const inputPassword = useRef<any>("");
  const inputPasswordConfirmation = useRef<any>("");
  const [message, setmessage] = useState('sfdsf');

  const onSubmit = async (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(inputPassword.current.value === inputPasswordConfirmation.current.value){
      let {data} = await axios.post(`${GlobalVarialble.url}/auth/signup`, JSON.stringify({
        'full_name' : inputFullName.current.value,
        'email' : inputEmail.current.value,
        'password' : inputPassword.current.value,
      }));

      if(data['status'] === 200) {
        localStorage.setItem('full_name', data['body']['full_name']);
        localStorage.setItem('email', data['body']['email']);
        localStorage.setItem('address', data['body']['address']);
        localStorage.setItem('user_id', data['body']['id']);
        window.location.reload();
      }
    }else {
      alert("password didn't Match");
    }
  }

  return (
    <div className='bg-navBar-bg md:py-[3rem] py-4 md:px-[6rem] px-[1rem] rounded-md shadow-md'>
      <form className='flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-between w-full items-center'>
          <h1 className='font-medium text-[20px] text-white'>Welcome Back, Get Login</h1>
          <CloseIcon onClick={() => {setAuth(!showAuth)}} className='text-gray h-[1.4rem] cursor-pointer'/>
        </div>
        <p className='text-gray mb-4 text-[11px] mt-2'>Create your account. Already have account? <span onClick={() =>{setShow(!show)}} className=' text-main-color cursor-pointer'> Login Here</span></p>
        <div className='py-[1rem] w-full'>
          <CustomInput useRef={inputFullName} type='text' label='Full Name' id='full_name' placeholder='Full Name'/>
          <CustomInput useRef={inputEmail} type='email' label='Email' id='email' placeholder='exemple@email.com'/>
          <CustomInput useRef={inputPassword} type='password' label='Password' id='password' placeholder='***********'/>
          <CustomInput useRef={inputPasswordConfirmation} type='password' label='Confirm Password' id='password_confirmation' placeholder='***********'/>
        </div>
        <div className='flex flex-row justify-between items-center mt-5 w-full'>
          <button type='submit' onClick={onSubmit} className='py-3 px-2 w-full bg-main-color rounded-sm'>Sign up</button>
        </div>
        <div>
          {message !== '' ?? message}
        </div>
      </form>
    </div>
  )
}

export default Signup
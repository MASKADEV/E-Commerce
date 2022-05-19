import React, {useRef} from 'react'
import CustomInput from '../../../components/ui/AuthInput/CustomInput';


const Signup:React.FC = () => {
  
  const inputFullName = useRef<any>("");;
  const inputEmail = useRef<any>("");;
  const inputPassword = useRef<any>("");
  const inputPasswordConfirmation = useRef<any>("");

  const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className='bg-navBar-bg md:py-[3rem] py-4 md:px-[6rem] px-[1rem] rounded-md shadow-md'>
      <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
        <h1 className='font-medium text-[20px] text-white'>Welcome Back, Get Login</h1>
        <p className='text-gray mb-4 text-[11px] mt-2'>Create your account. Already have account? <span onClick={() =>{}} className=' text-main-color'>Login Here</span></p>
        <div className='py-[1rem] w-full'>
          <CustomInput useRef={inputFullName} type='text' label='Full Name' id='full_name' placeholder='Full Name'/>
          <CustomInput useRef={inputEmail} type='email' label='Email' id='email' placeholder='exemple@email.com'/>
          <CustomInput useRef={inputPassword} type='password' label='Password' id='password' placeholder='***********'/>
          <CustomInput useRef={inputPasswordConfirmation} type='password' label='Confirm Password' id='password_confirmation' placeholder='***********'/>
        </div>
        <div className='flex flex-row justify-between items-center mt-5 w-full'>
          <button type='submit' className='py-3 px-2 w-full bg-main-color rounded-sm'>Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
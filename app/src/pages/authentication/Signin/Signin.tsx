import React from 'react';
import SigninInput from '../../../components/ui/AuthInput/SigninInput';

const Signin = () => {
  return (
    <div className=''>
      <form action="">
        <h1>Welcome Back, Get Login</h1>
        <p>Join your account, Don't have Account? <span>Create Account</span></p>
        <SigninInput type='email' label='Email' id='email' placeholder='exemple@email.com'/>
        <SigninInput type='password' label='Password' id='password' placeholder='***********'/>
        <div>
          <button>Sign in</button>
          <p>Forget Password?</p>
        </div>
      </form>
    </div>
  )
}

export default Signin
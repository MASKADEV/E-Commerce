import React from 'react';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';

const Authentication = () => {
  return (
    <div className='absolute top-0 left-0 h-[100%] w-[100%] flex items-center justify-center'>
      <Signup />
    </div>
  )
}

export default Authentication
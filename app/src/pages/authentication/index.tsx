import React from 'react';
import Signin from './Signin/Signin';

const Authentication = () => {
  return (
    <div className='absolute top-0 left-0 bg-navBar-bg h-[100%] w-[100%] bg-transparent flex items-center justify-center'>
      <Signin />
    </div>
  )
}

export default Authentication
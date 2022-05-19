import React, { useState } from 'react';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';

const Authentication = () => {

  const [show, setshow] = useState<boolean>(false);

  return (
    <div className='absolute top-0 left-0 h-[100%] w-[100%] flex items-center justify-center'>
      {
        show === false ? <Signin show ={show} setShow={setshow}/> : <Signup show ={show} setShow={setshow}/>
      }
    </div>
  )
}

export default Authentication
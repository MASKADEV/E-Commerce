import React, { useState } from 'react';
import { AuthProps } from '../../types';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';

const Authentication:React.FC<AuthProps> = ({showAuth, setAuth}) => {

  const [show, setshow] = useState<boolean>(false);
  return (
    <div className='fixed z-20 top-0 left-0 h-[100%] w-[100%] flex items-center justify-center backdrop-blur-md'>
      {
        show === false ? <Signin show ={show} showAuth={showAuth} setAuth={setAuth} setShow={setshow}/> : <Signup show ={show}  showAuth={showAuth} setAuth={setAuth}  setShow={setshow}/>
      }
    </div>
  )
      
}

export default Authentication
import React from 'react'
import {Signinput} from '../../../types';

const SigninInput:React.FC<Signinput> = ({id, placeholder, label, type}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} required placeholder={placeholder} id={id}/>
    </div>
  )
}

export default SigninInput
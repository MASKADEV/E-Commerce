import React from 'react'
import {CustomInputProps} from '../../../types';

const CustomInput:React.FC<CustomInputProps> = ({id, placeholder, label, type, useRef}) => {
  return (
    <div className='flex flex-col w-full mt-[2rem]'>
        <label className='text-white' htmlFor={id}>{label}*</label>
        <input ref={useRef} className='px-4 py-3 bg-transparent border text-white border-gray rounded mt-2' type={type} required placeholder={placeholder} id={id}/>
    </div>
  )
}

export default CustomInput
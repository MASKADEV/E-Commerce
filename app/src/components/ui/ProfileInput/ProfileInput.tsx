import React from 'react'
import { ProfileInputsProps } from '../../../types'

const ProfileInput:React.FC<ProfileInputsProps> = ({edit, useRef, label, id, type, placeholder}) => {
  return (
    <div className='flex flex-col w-full mt-[2rem] items-center'>
        <label className='text-white self-start' htmlFor={id}>{label}</label>
        <div className='flex flex-row md:w-[30rem] w-full items-center justify-between'>
            {!edit ? <input ref={useRef} className='px-4 py-3 bg-transparent border text-white border-gray rounded mt-2 md:w-[70%] w-[90%]' type={type} required placeholder={placeholder} id={id}/> :
                <input ref={useRef} className='px-4 py-3 bg-transparent border text-white border-gray rounded mt-2 md:w-[70%] w-[90%]' type={type} required placeholder={placeholder} disabled id={id}/>
            }
        </div>
    </div>
  )
}

export default ProfileInput
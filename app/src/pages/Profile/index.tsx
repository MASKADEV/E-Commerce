import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EditIcon from '../../components/icons/edit';
import ProfileInput from '../../components/ui/ProfileInput/ProfileInput';
import useAuth from '../../hooks/useAuth';
import { UserDetails } from '../../types';

const Profile:React.FC = () => {

  const full_name = useRef<any>("");
  const  email = useRef<any>("");
  const address = useRef<any>("");

  const [edit, setedit] = useState<boolean>(true);

  let navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<UserDetails>();

  const CheckAuth = () => {
    const auth = useAuth();
    if(!auth)
     {return navigate('/', {replace : true});}
    else {

    }
  }

  useEffect(() => {
    CheckAuth();
  },)
  

  return (
    <div className='w-full h-full flex flex-row items-center justify-center z-20'>
      <div className='md:w-[30rem]'>
      </div>
      <div className='p-11 bg-neutral-800 w-[40rem] relative flex flex-col justify-center md:mt-[10rem]'>
        <div className='flex flex-row  items-center justify-between'>
          <h1 className='text-white text-2xl font-medium'>Profile</h1>
          <EditIcon onClick={() => {setedit(!edit)}}  className='h-[1.3rem] mr-3 cursor-pointer text-white m-3 '/>
        </div>
        <form action="" className='w-full flex flex-col items-center'>
          <div className='flex flex-row items-center'>
            <ProfileInput edit={edit} useRef={full_name} type="text" id='full_name' label='Full Name' placeholder='full name' />
          </div>
          <div className='flex flex-row items-center'>
            <ProfileInput edit={edit} useRef={address} type="text" id='address' label='Address' placeholder='Address' />
          </div>
          <div className='flex flex-row items-center'>
            <ProfileInput edit={edit} useRef={email} type="text" id='email' label='Email' placeholder='Email' />
          </div>
          {!edit && <button className='px-3 py-2 mt-3 bg-main-color text-white md:w-[40%] w-[80%]'>Save</button> }
        </form>
      </div>
    </div>
  )
}

export default Profile
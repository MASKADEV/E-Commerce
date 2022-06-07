import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EditIcon from '../../../components/icons/edit-icon';
import ProfileInput from '../../../components/ui/profileInput/ProfileInput';
import GlobalVarialble from '../../../config/Constant';
import useAuth from '../../../hooks/useAuth';

const ProfileDetails = () => {

    const full_name = useRef<any>("");
    const  email = useRef<any>("");
    const address = useRef<any>("");
    const [edit, setedit] = useState<boolean>(true);
  
    let navigate = useNavigate();
  
    const CheckAuth = async () => {
      const auth = useAuth();
      if(!auth)
       {return navigate('/', {replace : true});}
      else {
        let token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        let {data} = await axios.get(GlobalVarialble.url + '/auth/getUserInfo', config)
        if(data['id']){
          full_name.current.value = data['full_name'];
          email.current.value = data['email'];
          address.current.value = data['address'] === 'none' ? 'add address' : data['address'];
        }else {
          return navigate('/', {replace : true});
        }
      } 
    }
  
    useEffect(() => {
      CheckAuth();
    },)
  
    const updateUserInfo = async (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      let token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let {data} = await axios.put(GlobalVarialble.url + '/user/updateInfo',JSON.stringify({
        'full_name': full_name.current.value,
        'email': email.current.value,
        'address': address.current.value,
      }),config);
      console.log(data['body']);
      
      localStorage.setItem('token', data['body']);
      window.location.reload();
    }
  
    return (
      <div className='w-full h-full flex flex-row items-center justify-center'>
        <div className='w-[40rem] relative flex flex-col justify-center md:mt-[10rem]'>
          <div className='flex flex-row  items-center justify-between'>
            <h1 className='text-white text-2xl font-medium'>Profile</h1>
            <div className='flex flex-row'>
              <EditIcon onClick={() => {setedit(!edit)}}  className='h-[1.3rem] mr-3 cursor-pointer text-white m-3 '/>
            </div>
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
            {!edit && <button onClick={updateUserInfo} className='px-3 py-2 mt-3 bg-main-color text-white md:w-[40%] w-[80%]'>Save</button> }
          </form>
        </div>
      </div>
    )
}

export default ProfileDetails
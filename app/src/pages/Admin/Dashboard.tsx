import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Contact from '../Contact';
import DashboardNavBar from './componnents/navigation/DashboardNavBar';
import Home from './sub_screens/Home';
import Managment from './sub_screens/Managment';
import Orders from './sub_screens/Orders';
import GlobalVarialble from '../../config/Constant';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard: React.FC = () => {
  const [switchMenu, setswitchMenu] = useState<string>('home');
  
  const loadpage = (page : string) => {
    switch (page) {
      case 'home':
        return <Home />
      case 'managment':
        return <Managment />
      case 'orders':
        return <Orders />
      case 'contact':
        return <Contact />
    }
  }
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
      if(data['role'] === 0){
        return navigate('/', {replace : true});
      }
    }
  }

  useEffect(() => {
    CheckAuth();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    loadpage(switchMenu);
  }, [switchMenu])
  

  return (
    <div className='flex flex-col w-screen pt-[6rem]'>
      <div className='text-white w-full'>
        <DashboardNavBar switchMenu={switchMenu} setswitchMenu={setswitchMenu}/>
      </div>
      <div>
          {loadpage(switchMenu)}
      </div>
    </div>
  )
}

export default Dashboard
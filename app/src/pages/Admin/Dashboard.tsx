import React, { useEffect, useState } from 'react';
import Contact from '../Contact';
import DashboardNavBar from './componnents/navigation/DashboardNavBar';
import Home from './sub_screens/Home';
import Managment from './sub_screens/Managment';
import Orders from './sub_screens/Orders';

const Dashboard = () => {
  const [switchMenu, setswitchMenu] = useState<string>('managment');
  
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

  useEffect(() => {
    loadpage(switchMenu);
  }, [switchMenu])
  

  return (
    <div className='flex flex-col w-screen'>
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
import React, { useState } from 'react';
import ProfileNavbar from './components/navigation';
import Orders from './components/orders';
import ProfileDetails from './components/profile';

const Profile:React.FC = () => {

  const [currentPage, setCurrentPage] = useState<string>('profileDetails');

  const fetchCurrentPage = () => {
    switch (currentPage) {
      case 'profileDetails':
        return <ProfileDetails />
      case 'orders':
        return <Orders/>
      default:
        return <ProfileDetails />
    }
  }

  return (
    <div className='w-screen h-screen pt-[5rem]'>
      <ProfileNavbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div>
        {fetchCurrentPage()}
      </div>
    </div>
  )
}

export default Profile
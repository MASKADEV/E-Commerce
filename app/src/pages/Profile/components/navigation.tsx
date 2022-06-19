import React from 'react';

interface props {
    currentPage : string
    setCurrentPage:  React.SetStateAction<any>,
}

const ProfileNavbar:React.FC<props> = ({setCurrentPage, currentPage}) => {
    
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

  return (
    <div className=' text-white md:w-[60%] w-full mx-auto mt-11'>
        <ul className='flex flex-row justify-between items-center'>
            <li>
                <div>
                    <button onClick={() => {setCurrentPage('profileDetails')}} className="text-white font-medium md:text-xl text-sm">Profile Details</button>
                    <hr className={`h-1 ${currentPage === 'profileDetails' ? 'bg-white' : 'bg-transparent'}`}/>
                </div>
            </li>
            <li>
                <div>
                    <button onClick={() => {setCurrentPage('orders')}} className="text-white font-medium md:text-xl text-sm">Orders</button>
                    <hr className={`h-1 ${currentPage === 'orders' ? 'bg-white' : 'bg-transparent'}`}/>
                </div>
            </li>
            <li>
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {logout()}} className='px-3 text-white'>Logout</button>
            </li>
        </ul>    
    </div>
  )
}

export default ProfileNavbar
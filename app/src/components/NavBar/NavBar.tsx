import React from 'react';
import { EmptyCartIcon } from '../icons/empty-cart-icon';
import { SearchIcon } from '../icons/search-icon';
import { UserIcon } from '../icons/user-icon';

const NavBar:React.FC = () => {
  return (
    <div className='h-[70px] bg-second-bg text-white z-10 shadow-md bg-navBar-bg'>
        <div className='md:px-[7rem] px-10 mx-auto flex flex-row justify-between items-center h-full'>
          <h1 className='md:text-2xl font-bold'>BRAND.</h1>
          <nav className='md:w-[30%] w-[70%] flex flex-row justify-end items-center'>
            <button  className='md:mr-[1rem] mr-3'>
              <SearchIcon className='md:h-[20px] h-[25px]'/>
            </button>
            <button className='md:mr-[4rem] mr-[2rem]'>
              <EmptyCartIcon className='md:h-[20px] h-[25px]' />
            </button>
            <button className='font-bold text-lg'>
              <UserIcon className='md:h-[20px] h-[25px]'/>
            </button>
          </nav>
        </div>
    </div>
  )
}

export default NavBar
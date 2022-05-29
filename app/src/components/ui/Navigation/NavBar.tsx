import React from 'react';
import { navBarProps } from '../../../types';
import { EmptyCartIcon } from '../../icons/empty-cart-icon';
import { SearchIcon } from '../../icons/search-icon';
import { UserIcon } from '../../icons/user-icon';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const NavBar:React.FC<navBarProps> = ({showProfile, setProfile, showPanier, setShowPanier, setAuth, showAuth}) => {

  let auth = useAuth();

  return (
    <div className='fixed z-20 h-[70px] bg-second-bg text-white w-full shadow-md bg-navBar-bg'>
        <div className='md:px-[7rem] px-10 mx-auto flex flex-row justify-between items-center h-full'>
          <Link to="/" className=' cursor-pointer md:text-2xl font-bold text-main-color'>BRAND.</Link>
          <nav className='md:w-[30%] w-[70%] flex flex-row justify-end items-center'>
            <button  className='md:mr-[1rem] mr-3'>
              <SearchIcon className='md:h-[20px] h-[25px]'/>
            </button>
            <button onClick={() => {setShowPanier(!showPanier)}} className='md:mr-[4rem] mr-[2rem]'>
              <EmptyCartIcon className='md:h-[20px] h-[25px]' />
            </button>
            {
              auth ? <Link to={'/profile'}><UserIcon className='md:h-[20px] h-[25px]'/></Link>:
                    <button onClick={() => {setAuth(!showAuth)}} className='font-bold text-lg'>
                      <UserIcon className='md:h-[20px] h-[25px]'/></button>
            }
          </nav>
        </div>
    </div>
  )
}

export default NavBar
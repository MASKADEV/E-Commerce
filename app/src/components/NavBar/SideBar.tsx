import React from 'react';
import { DiscoverIcon } from '../icons/discover-icon';
import { HomeIcon } from '../icons/home-icon';
import { InformationIcon } from '../icons/information-icon';
import { ProductIcon } from '../icons/product-icon';
import NavigationLink from '../Layouts/NavigationLink';

const SideBar:React.FC = () => {
  return (
   <div className='md:relative fixed md:w-[20rem] w-full bg-sideBar-bg md:h-[60rem] overflow-y-hidden h-[80px] md:top-0 bottom-0'>
        <nav className='text-white flex md:flex-col flex-row md:items-start items-center md:mt-[2rem] first-letter:items-center h-full md:justify-start justify-between md:mx-0'>
          <div className='flex flex-row items-center md:mr-[2rem] mr-1 md:h-[3rem] md:hover:bg-hover-bg md:w-full'>
            <HomeIcon className='md:mr-5 mr-2 md:ml-[2rem] md:h-[20px] h-[25px]'/>
            <NavigationLink title='Home' link='/' />
          </div>
          <div className='flex flex-row items-center md:mr-[2rem] mr-1 md:h-[3rem] md:hover:bg-hover-bg md:w-full md:mt-[5px]'>
            <ProductIcon className='md:mr-5 mr-2 md:h-[20px] h-[25px] md:ml-[2rem]'/>
            <NavigationLink title='Explore' link='/explore' />
          </div>
          <div className='flex flex-row items-center md:mr-[2rem] mr-1 md:h-[3rem] md:hover:bg-hover-bg md:w-full md:mt-[5px]'>
            <DiscoverIcon className='md:mr-5 mr-2 md:h-[20px] h-[25px] md:ml-[2rem]'/>
            <NavigationLink title='Popular Products' link='/pupolar' />
          </div>
          <div className='flex flex-row items-center md:mr-[2rem] mr-1 md:h-[3rem] md:hover:bg-hover-bg md:w-full md:mt-[5px]'>
            <InformationIcon className='md:mr-5 mr-2 md:h-[20px] h-[25px] md:ml-[2rem]' />
            <NavigationLink title='Contact' link='/contact' />
          </div>
        </nav>
   </div>
  )
}

export default SideBar
import React from 'react';
import { DiscoverIcon } from '../../icons/discover-icon';
import { HomeIcon } from '../../icons/home-icon';
import { InformationIcon } from '../../icons/information-icon';
import { ProductIcon } from '../../icons/product-icon';
import NavigationLink from '../links/NavigationLink';

const SideBar:React.FC = () => {
  return (
   <div className='fixed z-10 md:w-[20rem] w-full bg-sideBar-bg md:h-full overflow-y-hidden h-[80px] md:top-0 bottom-0 flex flex-col justify-between'>
        <nav className=' text-white flex md:flex-col flex-row md:items-start items-center md:mt-[6rem] first-letter:items-center h-full md:justify-start justify-between md:mx-0 md:px-0 px-4'>
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
        <div className=' md:flex hidden flex-col items-center'>
          <div className='h-[2px] w-[95%] mx-4 bg-gray mb-4'></div>
          <div className='flex flex-row w-[60%] mx-auto justify-between items-center'>
              <div className='hover:text-main-color text-gray'>
                <NavigationLink title='FAQ' link='/faq'/>
              </div>
              <div className='hover:text-main-color text-gray'>
                <NavigationLink title='Terms' link='/terms'/>
              </div>
              <div className='hover:text-main-color text-gray'>
                <NavigationLink title='Help' link='/help'/>
              </div>
          </div>
          <p className='mb-5 text-gray text-xs'>@ CopyRight 2022 By MASKADEV</p>
        </div>
   </div>
  )
}

export default SideBar
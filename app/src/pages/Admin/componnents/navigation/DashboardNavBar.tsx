import React from 'react'
import { HelpIcon } from '../../../../components/icons/help-icon'
import { HomeIcon } from '../../../../components/icons/home-icon'
import ManagmentIcon from '../../../../components/icons/managment-icon'
import OrdersIcon from '../../../../components/icons/orders-icon'
import StaticsIcon from '../../../../components/icons/statitcs-icon'
import { DashboardNavProps } from '../../../../types'

const DashboardNavBar:React.FC<DashboardNavProps> = ({switchMenu, setswitchMenu}) => {
  return (
    <div className='flex flex-row items-center justify-between w-[80%] mx-auto'>
        <div className='text-white font-medium md:text-xl text-sm'>
            <div>
                <div className='flex flex-row items-center'>
                    <StaticsIcon className='h-[1.5rem] mr-2 md:flex hidden' />
                    <button className='m-0 p-0' onClick={()=>{setswitchMenu('home')}}>Analytics</button>
                </div>
                <div className={`h-1 ${switchMenu === 'home' ? 'bg-white' : 'bg-transparent'} mt-2`}/>
            </div>
        </div>
        <div className='text-white font-medium md:text-xl text-sm'>
            <div>
                <div className='flex flex-row items-center'>
                    <ManagmentIcon className='h-[1.5rem] mr-2 md:flex hidden'/>
                    <button onClick={()=>{setswitchMenu('managment')}}>Managment</button>
                </div>
                <div className={`h-1 ${switchMenu === 'managment' ? 'bg-white' : 'bg-transparent'} mt-1`}/>
            </div>
        </div>
        <div className='text-white font-medium md:text-xl text-sm'>
            <div>
                <div className='flex flex-row items-center'>
                    <OrdersIcon className='h-[1.5rem] mr-2 md:flex hidden'/>
                    <button onClick={()=>{setswitchMenu('orders')}}>Orders</button>
                </div>
                <div className={`h-1 ${switchMenu === 'orders' ? 'bg-white' : 'bg-transparent'} mt-1`}/>
            </div>
        </div>
        <div className='text-white font-medium md:text-xl text-sm'>
            <div>
                <div className='flex flex-row items-center'>
                    <HelpIcon className='h-[1.5rem] mr-2 md:flex hidden'/>
                    <button onClick={()=>{setswitchMenu('contact')}}>Contact</button>
                </div>
                <div className={`h-1 ${switchMenu === 'contact' ? 'bg-white' : 'bg-transparent'} mt-1`}/>
            </div>
        </div>
    </div>
  )
}

export default DashboardNavBar
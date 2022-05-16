import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../NavBar/SideBar';

export default function Layout({ children } : any) {
  return (
    <main className='font-[Poppins] w-screen h-screen  bg-primary-bg'>
      <header>
        <NavBar />
      </header>
      <div className='flex flex-row'>
        <SideBar />
        <article className='mt-24'>{children}</article>
      </div>
    </main>
  )
}
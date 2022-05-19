import React, { useState } from 'react';
import NavBar from '../ui/NavBar/NavBar';
import SideBar from '../ui/NavBar/SideBar';
import AddToCart from '../ui/AddToCart/AddToCart';
import Authentication from '../../pages/authentication';

export default function Layout({ children } : any) {

  const [showPanie, setShowPanie] = useState<boolean>(false);

  return (
    <main className='font-[Poppins] w-screen h-screen  bg-primary-bg'>
      <header>
        <NavBar showPanier={showPanie} setShowPanier={setShowPanie}/>
        <AddToCart showPanier={showPanie} setShowPanier={setShowPanie} />
        <Authentication />
      </header>
      <div className='flex flex-row'>
        <SideBar />
        <article className='mt-24'>{children}</article>
      </div>
    </main>
  )
}
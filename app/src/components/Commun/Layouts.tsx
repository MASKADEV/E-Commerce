import React, { useState } from 'react';
import NavBar from '../ui/Navigation/NavBar';
import SideBar from '../ui/Navigation/SideBar';
import AddToCart from '../ui/AddToCart/AddToCart';
import Authentication from '../../pages/authentication';

export default function Layout({ children } : any) {

  const [showPanie, setShowPanie] = useState<boolean>(false);
  const [showAuth, setAuth] = useState<boolean>(false);

  return (
    <main className='font-[Poppins] w-screen h-screen  bg-primary-bg'>
      <header>
        <NavBar  showAuth={showAuth} setAuth={setAuth} showPanier={showPanie} setShowPanier={setShowPanie}/>
        <AddToCart showPanier={showPanie} setShowPanier={setShowPanie} />
        {showAuth && <Authentication showAuth={showAuth} setAuth={setAuth} /> }
      </header>
      <div className='flex flex-row'>
        <SideBar />
        <article className='mt-24'>{children}</article>
      </div>
    </main>
  )
}
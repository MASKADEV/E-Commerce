import React, { useState } from 'react';
import Authentication from '../../pages/authentication';
import AddToCart from '../ui/AddToCart/AddToCart';
import NavBar from '../ui/Navigation/NavBar';

export default function Layout({ children } : any) {

  const [showPanie, setShowPanie] = useState<boolean>(false);
  const [showAuth, setAuth] = useState<boolean>(false);
  const [showProfile, setProfile] = useState<boolean>(false);

  return (
    <main className='font-[Poppins] w-screen h-screen  bg-primary-bg'>
      <header>
        <NavBar showProfile={showProfile} setProfile={setProfile} showAuth={showAuth} setAuth={setAuth} showPanier={showPanie} setShowPanier={setShowPanie}/>
        <AddToCart showPanier={showPanie} setShowPanier={setShowPanie} />
        {showAuth && <Authentication showAuth={showAuth} setAuth={setAuth} /> }
      </header>
      <div className='flex flex-row'>
        <article >{children}</article>
      </div>
    </main>
  )
}
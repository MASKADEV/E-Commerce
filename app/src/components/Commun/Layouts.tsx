import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';


export default function Layout({ children } : any) {
  return (
    <main className='font-[Poppins]'>
      <header>
        <NavBar />
      </header>
      <div>1</div>
      <article className='mt-24 w-screen'>{children}</article>
    </main>
  )
}
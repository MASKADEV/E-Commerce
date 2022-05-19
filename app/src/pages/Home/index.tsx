import React from 'react';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import Authentication from '../authentication';

const Home = () => {
  return (
      <div className='flex flex-row overflow-x-hidden'>
        <div className='w-[25rem] md:flex hidden'></div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-3'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
  )
}

export default Home
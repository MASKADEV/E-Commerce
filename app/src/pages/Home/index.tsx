import React from 'react';
import ProductCard from '../../components/ui/cards/ProductCard';

const Home = () => {
  return (
      <div className='flex flex-row overflow-x-hidden w-full'>
        <div className='w-[25rem] md:flex hidden'></div>
        <div className='md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-5 mb-3 '>
          <ProductCard title='Products Title' description='asf' categorie='Products Categories' price={30.99} image_url={"https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-PDP-R01a_700x.jpg"} />
          <ProductCard title='Products Title' description='asf' categorie='Products Categories' price={30.99} image_url={"https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-PDP-R01a_700x.jpg"} />
          <ProductCard title='Products Title' description='asf' categorie='Products Categories' price={30.99} image_url={"https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-PDP-R01a_700x.jpg"} />
        </div>
      </div>
  )
}

export default Home
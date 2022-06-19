import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../../../components/ui/Cards/ProductCard';
import GlobalVarialble from '../../../../config/Constant';

const LatestProducts = () => {

  const [products, setproducts] = useState<any>([{}]);
  const [visible, setvisible] = useState(6);

  const fetchproducts = async () => {
    try{
      let url = GlobalVarialble.url + '/admin/fetchProducts';
      await axios.get(url).then((response : any) => {
        setproducts(response.data);
      });
    }catch(err)
    {
      console.log(err);
    }
    };

  useEffect(() => {
      fetchproducts();
  }, [])

  const showMore = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setvisible(visible + 6)
  }

    return (
        <div className='flex flex-col mx-auto items-center w-full'>
          <div className="p-6 py-12 bg-main-color text-white w-full">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                  <br className="sm:hidden"/>50% Off
                </h2>
                <div className="space-x-2 text-center py-2 lg:py-0">
                  <span>Plus free shipping! Use code:</span>
                  <span className="font-bold text-lg">SELLECOToday</span>
                </div>
                <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap md:pl-[10rem] mb-3'>
            {products.slice(0,visible).map((product:any, index : number) => (
                <ProductCard key={index} id={product['id']} categorie={product['c_title']} title={product['title']} price={product['price']} image_url={product['image_url']} />
            ))}
          </div>
          {products.length > 6 && <button onClick={showMore} className=' duration-150 my-2 bg-main-color hover:bg-white text-white hover:text-main-color px-5 py-3 rounded-md w-[10rem]'>Load More</button>}
        </div>
    )
}

export default LatestProducts
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
          <div className=' md:grid md:grid-cols-2 mx-auto xl:grid-cols-4 md:gap-5 mb-3'>
            {products.slice(0,visible).map((product:any, index : number) => (
                <ProductCard key={index} id={product['id']} categorie={product['c_title']} title={product['title']} price={product['price']} image_url={product['image_url']} />
            ))}
          </div>
          {products.length > 6 && <button onClick={showMore} className=' duration-150 my-2 bg-main-color hover:bg-white text-white hover:text-main-color px-5 py-3 rounded-md w-[10rem]'>Load More</button>}
        </div>
    )
}

export default LatestProducts
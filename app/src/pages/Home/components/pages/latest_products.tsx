import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../../../components/ui/cards/ProductCard';

const LatestProducts = () => {

  const [isLoading, setLoading] = useState<any>(false);
  const [products, setproducts] = useState<any>([{}]);
  const [visible, setvisible] = useState(6);
  const [ProductDetails, setProductDetails] = useState(true);

  useEffect(() => {
    let fetchproducts = async () => {
      setLoading(true);
      try{
        let url = 'http://localhost/ecommercefillrouge/rest-api/admin/fetchProducts';
        await axios.get(url).then((response : any) => {
          
          console.log(response.data);
          setproducts(response.data);

        });
      }catch(err)
      {
        console.log(err);
      }
      setLoading(false);
      };
      fetchproducts();
  }, [])

  const showMore = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setvisible(visible + 3)
  }

    return (
        <div className='flex flex-col mx-auto items-center w-full'>
          <div className=' md:grid md:grid-cols-2 mx-auto xl:grid-cols-3 md:gap-5 mb-3'>
            {products.slice(0,visible).map((product:any, index : number) => (
                <ProductCard key={index} id={product['id']} categorie={product['c_title']} title={product['title']} price={product['price']} image_url={product['image_url']} />
            ))}
          </div>
          <button onClick={showMore} className=' duration-150 my-2 bg-main-color hover:bg-white text-white hover:text-main-color px-5 py-3 rounded-md w-[10rem]'>Load More</button>
        </div>
        
    )
}

export default LatestProducts
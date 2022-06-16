import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ui/Cards/ProductCard';
import GlobalVarialble from '../../config/Constant';

const SearchPage:React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [products, setproducts] = useState([]);
    const [search, setsearch] = useState<string>("");

    const searchFC = async (keywords : string) => {
      let { data } = await axios.post(GlobalVarialble.url + '/user/search', {
        'search' : keywords
      });
      setproducts(data);
    }
    
    useEffect(() => {
      if(search !== "")
      {
        setLoading(true);
        searchFC(search);
        setLoading(false);
      } else {
        setproducts([]);
      }
    }, [search])

  return (
    <div className='h-screen w-screen flex flex-col pl-[2rem] pt-[6rem]'>
        <div className='flex flex-row items-center'>
            <input onChange={(e : React.ChangeEvent<HTMLInputElement>) => {e.preventDefault(); setsearch(e.currentTarget.value)}} className='px-2 text-white shadow-md  py-3 w-[30rem] bg-transparent border-2 border-white border-opacity-60 rounded-md' type="text" placeholder='Search'/>
        </div>
        <div className='text-white pt-[5rem]'>
          {loading ? <div>Loading</div> 
          :
           <div className=''>
            <div className=' md:grid md:grid-cols-2 mx-auto xl:grid-cols-5 md:gap-5 mb-3'>
              {products.map((product:any, index : number) => (
                  <ProductCard key={index} id={product['id']} categorie={product['c_title']} title={product['title']} price={product['price']} image_url={product['image_url']} />
              ))}
            </div>
          </div> }
        </div>
    </div>
  )
}

export default SearchPage
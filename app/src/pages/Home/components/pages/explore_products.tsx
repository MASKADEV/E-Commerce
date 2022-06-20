import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../../../components/ui/Cards/ProductCard';
import GlobalVarialble from '../../../../config/Constant';

const ExploreProducts = () => {
  const [products, setproducts] = useState<any>([{}]);
  const [visible, setvisible] = useState(6);
  const [categories, setcategories] = useState<object[]>([{}]);
  const [search, setSearch] = useState<string>("");

  const fetchproducts = async () => {
    try{
      if(search === ""){
        let url = GlobalVarialble.url + '/admin/fetchProducts';
        await axios.get(url).then((response : any) => {
          setproducts(response.data);
        });
      }else {
        let token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        let url = GlobalVarialble.url + '/user/fetchByCategories';
        await axios.post(url, {'title' : search}, config).then((response : any) => {
          setproducts(response.data);
        });
      }
    }catch(err)
    {
      console.log(err);
    }
  };

  //Fetch Categories
  const fetchCategories = async () => {
    let {data} = await axios.get(GlobalVarialble.url + '/admin/fetchCategories',);
    setcategories(data);
  }

  useEffect(() => {
      fetchproducts();
      fetchCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const showMore = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setvisible(visible + 6)
  }

  const handleSearch = (search : string) => {
    console.log(search);
    setSearch(search);
  }

    return (
        <div className=' md:pl-[21rem]  flex flex-col mx-auto items-center w-full'>
          <div className='text-white flex overflow-x-auto space-x-8 w-[80%] h-[5rem]'>
              <button onClick={(e : React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); handleSearch(""); }} className='cursor-pointer px-3 py-2 bg-navBar-bg flex-shrink-0 self-center flex flex-row items-center rounded-2xl h-[50%]'>ALL</button>
              {
                categories.map((item : any, index) => (
                    <button onClick={(e : React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); handleSearch(item['title']); }} className='cursor-pointer px-3 py-2 bg-navBar-bg flex-shrink-0 self-center flex flex-row items-center rounded-2xl h-[50%]'>{item['title']}</button>
                ))
              }
          </div>
          <hr className='bg-white w-full bg-opacity-50' />
          <div className='flex flex-wrap mb-3 mt-1'>
            {products.slice(0,visible).map((product:any, index : number) => (
                <ProductCard key={index} id={product['id']} categorie={product['c_title']} title={product['title']} price={product['price']} image_url={product['image_url']} />
            ))}
          </div>
          {products.length > 6 && <button onClick={showMore} className=' duration-150 my-2 bg-main-color hover:bg-white text-white hover:text-main-color px-5 py-3 rounded-md w-[10rem]'>Load More</button>}
        </div>
    );
}

export default ExploreProducts
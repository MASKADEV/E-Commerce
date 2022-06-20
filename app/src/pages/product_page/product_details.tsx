/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GlobalVarialble from '../../config/Constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/features/addToCartSlice';
import ProductCard from '../../components/ui/Cards/ProductCard';



const ProductDetails:React.FC = () => {
    
    const [id, setid] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [product_info, setProductInfo] = useState({
        'id' : 0,
        'title' : '',
        'description' : '',
        'categories' : 0,
        'image_url' : '',
        'stock' : 0,
        'price' : 0,
    });
    const [currentStock , setCurrentStock ] = useState<number>(product_info.stock);
    const [quantity , setQuantity ] = useState<number>(0);

    const dispatch = useDispatch();
    const addtoCart = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(addItem({'title' : product_info.title, 'id':id, 'image' : product_info.image_url, 'category' : product_info.categories, 'price' : product_info.price, 'quantity' : quantity}));
        setQuantity(0);
    }

    useEffect(() => {
        setid(window.location.href.split('/').pop());
    }, [id])

    const fetchProduct = async (productID : any) => {
        let _url = GlobalVarialble.url + '/admin/fetchSingleProduct';
        let {data} = await axios.post(_url, {'id' : productID});
        setProductInfo({...data});
        setCurrentStock(product_info.stock);
    }

    useEffect(() => {
        setLoading(true);
        fetchProduct(id);
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, product_info])


    const [products, setproducts] = useState<any>([{}]);
    const [visible] = useState(5);
  
    const fetchproducts = async () => {
      try{
        let token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        let url = GlobalVarialble.url + '/user/fetchRelatedProducts';
        await axios.post(url, {"id" : 11}, config).then((response : any) => {
            setproducts(response.data);
        });
      }catch(err)
      {
        console.log(err);
      }
    };

    useEffect(() => {
        fetchproducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            { loading === true ? <div></div>
            :
            <div className='h-screen w-screen items flex flex-col'>
                <div className='md:px-[7rem] px-10 pt-[10rem] items-center flex md:flex-row flex-col'>
                    <div className='md:w-[50%] w-full mt-24 md:mt-0'>
                        <img className='rounded h-[30rem] w-[30rem]' src={product_info.image_url} />
                    </div>
                    <div className='flex flex-col md:px-3 md:w-[50%] w-full md:mt-0 mt-4'>
                        <p className='text-main-color font-bold'>{product_info.categories}</p>
                        <h1 className='text-white font-medium md:text-4xl text-md mt-8'>{product_info.title}</h1>
                        <p className='md:text-md text-sm text-white text-opacity-70 mt-4'>{product_info.description}</p>
                        <p className='my-4 text-white font-bold  text-3xl'>{product_info.price}$</p>
                        <div className='flex flex-row items-center '>
                            <div className='w-[8rem] h-full flex flex-row justify-center items-center text-white'>
                                <button onClick={(e:React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); if(quantity > 0) {setQuantity( quantity -1)}}} className='rounded bg-white h-[2.5rem] w-[2.5rem] text-main-color text-center text-2xl'>-</button>
                                <p className='mx-4'>{quantity}</p>
                                <button onClick={(e:React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); if(product_info.stock > quantity) {setQuantity( quantity +1)}}} className='bg-white rounded h-[2.5rem] w-[2.5rem] text-main-color text-center text-2xl'>+</button>
                            </div>
                            <p className='text-white text-md text-opacity-70 ml-3'>{currentStock} Pieces available</p>
                        </div>
                        <button onClick={addtoCart} className='bg-main-color py-3 w-[10rem] rounded-md text-white hover:bg-white hover:text-main-color duration-500 mt-11 shadow-lg'>Add To Cart</button>
                    </div>
                </div>
                <h1 className='md:px-[7rem] px-10 mt-[3rem] text-white font-bold text-2xl'>Related Products</h1>
                <div className='md:px-[7rem] px-10 mt-[3rem] flex flex-col mx-auto items-center w-full'>
                    <div className='flex flex-wrap mb-3 mt-1'>
                        {products.slice(0,visible).map((product:any, index : number) => (
                            <ProductCard key={index} id={product['id']} categorie={product['c_title']} title={product['title']} price={product['price']} image_url={product['image_url']} />
                        ))}
                    </div>
                </div>  
            </div>
        }
        </>
    )
}

export default ProductDetails
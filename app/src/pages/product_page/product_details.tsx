import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import GlobalVarialble from '../../config/Constant';

const ProductDetails:React.FC = () => {
    
    const location = useLocation();
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

    useEffect(() => {
        setid(window.location.href.split('/').pop());
    }, [id])

    const fetchProduct = async (productID : any) => {
        let _url = GlobalVarialble.url + '/admin/fetchSingleProduct';
        let {data} = await axios.post(_url, {'id' : productID});
        setProductInfo({...data});
        console.log(product_info);
    }

    useEffect(() => {
        setLoading(true);
        fetchProduct(id);
        setLoading(false);
    }, [id])
    
    return (
        <>
            {loading === true ? <div></div>
            :
            <div className='md:px-[7rem] px-10 bg-navBar-bg h-screen w-screen items-center flex md:flex-row flex-col'>
                <div className='md:w-[50%] w-full mt-24 md:mt-0'>
                    <img className='rounded' src={product_info.image_url} />
                </div>
                <div className='flex flex-col md:px-3 md:w-[50%] w-full md:mt-0 mt-4'>
                    <p className='text-main-color font-bold'>{product_info.categories}</p>
                    <h1 className='text-white font-medium md:text-4xl text-md mt-8'>{product_info.title}</h1>
                    <p className='md:text-md text-sm text-white text-opacity-70 mt-4'>{product_info.description}</p>
                    <p className='my-4 text-white font-bold  text-3xl'>{product_info.price}$</p>
                    <div className='w-[8rem] flex flex-row justify-between items-center mt-4 text-white'>
                        <button className='rounded bg-white h-[3rem] w-[3rem] text-main-color text-center text-2xl'>-</button>
                        <p className='mx-4'>0</p>
                        <button className='bg-white rounded h-[3rem] w-[3rem] text-main-color text-center text-2xl'>+</button>
                    </div>
                    <button className='bg-main-color py-3 rounded-md text-white hover:bg-white hover:text-main-color duration-500 mt-11 shadow-lg'>Add To Cart</button>
                </div>
            </div>    
        }
        </>
    )
}

export default ProductDetails
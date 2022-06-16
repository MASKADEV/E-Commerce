import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddToCartCard from '../../components/ui/Cards/addToCartCard';
import GlobalVarialble from '../../config/Constant';
import { RootState } from '../../store/store';

const Checkout:React.FC = () => {

    const addtocart = useSelector((state: RootState) => state.addToCart.value);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    let navigate = useNavigate();

    //check if checkout is empty
    useEffect(() => {
        if(addtocart.length === 0)
        {
            return navigate('/', {replace : true});            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addtocart])

    useEffect(() => {
        addtocart.map((item : any) => (
          setTotalPrice(totalPrice + (item.price * item.quantity))
        ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addtocart])

    const orderNow = async ( e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        for(let i = 0; i <= addtocart.length; i++ )
        {
           await insertData(addtocart[i])
        }
        console.log('done 1');
        
    }
    
    const insertData = async (data :any) => {
        let token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };
       const maska = await axios.post(GlobalVarialble.url + '/user/order', {
            'product_id' : 57,
            'order_id' : 2344,
            'quantity' : 12,
        }, config);
        console.log(maska.data);
    }

  return (
    <>
        <div className='text-white h-screen w-screen flex flex-col items-center justify-center pt-[5rem]' >
            <div className='max-w-[40rem] flex flex-col w-5/12 bg-navBar-bg mt-5 py-8 px-11'>
                <h1 className='text-white font-medium'>Your Orders</h1>
                <hr className=' bg-slate-400 bg-opacity-70 mt-8'/>
                <div className='mt-8'>
                {addtocart.map((item : any, index : number) => (
                    <AddToCartCard key={index} index={index} id={item.id} quantity={item.quantity} title={item.title} price={item.price} category={item.category} image ={item.image}/>
                ))}
                </div>

                <div className='w-full flex flex-col justify-center mt-11'>
                <hr className=' bg-slate-400 bg-opacity-70 mt-8'/>
                <div className='w-full justify-between flex flex-row px-4 py-5 font-medium'>
                    <p>Subtotal:</p>
                    <p>{totalPrice}$</p>
                </div>
                <hr className=' bg-slate-400 bg-opacity-70 mt-8'/>
                <button onClick={orderNow} className='bg-main-color text-white hover:bg-white hover:text-main-color duration-300 py-3 mx-11 text-center rounded-md mt-11'>Pay Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
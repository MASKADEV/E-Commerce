import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddToCartCard from '../../components/ui/Cards/addToCartCard';
import GlobalVarialble from '../../config/Constant';
import { RootState } from '../../store/store';
import { v4 as uuid } from 'uuid';
import { ethers } from 'ethers';

const Checkout:React.FC = () => {

    const addtocart = useSelector((state: RootState) => state.addToCart.value);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [txs, setTxs] = useState([]);
    const [error, setError] = useState<string>("");
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
        const unique_id = uuid();
        try {

            startPayment(setTxs, '0.001');
            // for(let i = 0; i <= addtocart.length; i++ )
            // {
            //    await insertData(addtocart[i], unique_id);
            // }
        }
        catch(e){
            // console.log(e);   
        }
        // window.location.reload();
    }
    
    const insertData = async (data :any, id:string) => {
        let token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };

        await axios.post(GlobalVarialble.url + '/user/order', {
            'product_id' : data['id'],
            'order_id' : id,
            'quantity' : data['quantity'],
        }, config);

    }

    const startPayment = async (setTxs : any, total  : string) => {

              if (!window.ethereum)
                throw new Error("No crypto wallet found. Please install it.");
              await window.ethereum.send("eth_requestAccounts");
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              ethers.utils.getAddress('0x883369F2753fF191A30AC9DAB6CE350Ae9cF395C');
              const tx = await signer.sendTransaction({
                to: '0x883369F2753fF191A30AC9DAB6CE350Ae9cF395C',
                value: ethers.utils.parseEther(total)
              });
              console.log('maska');
              console.log(tx);
            //   setTxs([tx]);
            //   console.log("tx : " + tx);
            
      };

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
                {error !== "" && <div className='text-red-200 font-medium text-center mt-2'>{error}</div> }
            </div>
        </div>
    </>
  )
}

export default Checkout
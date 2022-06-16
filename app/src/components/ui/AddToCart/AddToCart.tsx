import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../store/store'
import { navBarProps } from '../../../types'
import { CloseIcon } from '../../icons/close-icon'
import AddToCartCard from '../Cards/addToCartCard'

const AddToCart:React.FC<navBarProps> = ({showPanier, setShowPanier}) => {

  const addtocart = useSelector((state: RootState) => state.addToCart.value);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
      addtocart.map((item : any) => (
        setTotalPrice(totalPrice + (item.price * item.quantity))
      ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addtocart])
  
  

  return (
    <div className={`fixed h-full ${!showPanier ? ' -right-[30rem]' : ' right-0'} top-0 w-[25rem] z-30 duration-300 ease-out bg-navBar-bg text-white border-l-2 border-l-white border-opacity-30`}>
        <div className='  flex flex-row items-center w-full justify-between mt-6 px-3 h-[3rem]'>
          <div className='text-xl font-medium'>Shopping Cart</div>
          <CloseIcon onClick={() => {setShowPanier(!showPanier)}} className='h-[1.3rem] hover:h-[1.75rem] duration-500 cursor-pointer text-white opacity-70 hover:opacity-100'/>
        </div>
        <div className=' relative flex flex-col mt-[8rem] h-[70%] overflow-x-hidden'>
        {addtocart.map((item : any, index : number) => (
          <AddToCartCard key={index} index={index} id={item.id} quantity={item.quantity} title={item.title} price={item.price} category={item.category} image ={item.image}/>
        ))}
        </div>
        <div className='w-full flex flex-col justify-center'>
          <hr className='w-full h-[0.2rem] bg-opacity-50 bg-white'/>
          <div className='w-full justify-between flex flex-row px-4 py-5 font-medium'>
            <p>Subtotal:</p>
            <p>{totalPrice}$</p>
          </div>
          <Link to={'/checkout'} className='bg-main-color text-white hover:bg-white hover:text-main-color duration-300 py-3 mx-11 text-center rounded-md mt-3'>Proccess to checkout</Link>
        </div>
    </div>
  )
}

export default AddToCart
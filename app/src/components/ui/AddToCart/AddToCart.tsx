import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { navBarProps } from '../../../types'
import { CloseIcon } from '../../icons/close-icon'
import AddToCartCard from '../Cards/addToCartCard'

const AddToCart:React.FC<navBarProps> = ({showPanier, setShowPanier}) => {

  const addtocart = useSelector((state: RootState) => state.addToCart.value);

  return (
    <div className={`fixed h-full ${!showPanier ? ' -right-[30rem]' : ' right-0'} top-0 w-[25rem] z-30 duration-300 ease-out bg-navBar-bg text-white`}>
        <div className='  flex flex-row items-center w-full justify-between mt-6 px-3 h-[3rem]'>
          <div className=' font-medium'>Shopping Cart</div>
          <CloseIcon onClick={() => {setShowPanier(!showPanier)}} className='h-[1.3rem] hover:h-[1.75rem] duration-500 cursor-pointer text-white opacity-70 hover:opacity-100'/>
        </div>
        <div className=' relative flex flex-col mt-[8rem] h-[70%] overflow-x-hidden'>
        {addtocart.map((item : any, index : number) => (
          // <AddToCartCard title={item.title} category={item.category} />
          <AddToCartCard id={item.id} title={item.title} price={item.price} category={item.category} image ={item.image}/>
        ))}
        </div>
    </div>
  )
}

export default AddToCart
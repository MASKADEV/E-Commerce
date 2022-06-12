import React from 'react'
import { CloseIcon } from '../../icons/close-icon'

interface props {
    title? : string,
    price? : number,
    id? : number,
    category? : string,
    image? : string,
    quantity? : number,
}

const addToCartCard:React.FC<props> = ({id, title, category, quantity, image, price}) => {
  return (
    <>
        <div className='flex flex-row text-white w-full items-center mt-3'>
            <div>
                <CloseIcon className='h-[1rem] w-[1rem] mx-3'/>
            </div>
            <div className='flex flex-row w-full mr-3'>
                <div>
                    <img src={image} className="h-[80px] w-[100px]" alt="" />
                </div>
                <div className='w-full flex flex-row items-center justify-between ml-3'>
                    <div className='flex flex-col'>
                        <div className='text-white font-medium'>{title}</div>
                        <div className='text-white text-opacity-50 font-sm'>{category}</div>
                        <div className=' text-white text-opacity-50 font-sm'>300</div>
                    </div>
                    <p>{price}$</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default addToCartCard
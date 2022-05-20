import React from 'react'
import { ProductsProps } from '../../../types'

const ProductCard:React.FC<ProductsProps> = ({title, description, image_url, price, categorie}) => {
  return (
        <div className="flex flex-col text-white p-4 md:ml-3 items-center">
            <div className='h-[300px] w-[300px] overflow-hidden'>
                <img className='rounded-md' src={image_url} alt="products" />
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className='mt-3 flex flex-col items-start justify-start'>
                    <h1 className='md:text-xl text-sm'>{title}</h1>
                    <p className='text-sm text-gray'>{categorie}</p>
                </div>
                <div>
                    <p className='md:text-xl font-medium'>{price}$</p>
                </div>
            </div>
            <div className='w-full mt-3'>
                <button className='w-full bg-main-color py-3 rounded-md hover:bg-white hover:text-main-color'>Add To Card</button>
            </div>
        </div>
  )
}

export default ProductCard
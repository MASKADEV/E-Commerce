/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { ProductsProps } from '../../types'
import { CloseIcon } from '../icons/close-icon'

const Product : React.FC<ProductsProps> = ({title, categorie, price, image_url}) => {
  return (
    <div className='flex flex-col justify-between h-full mt-3'>
        <div className='flex flex-row h-[7rem] w-full justify-between items-center mx-3 '>
            <CloseIcon className='h-[20px] cursor-pointer'/>
            <div className='flex flex-row items-center  h-full mx-5 w-full'>
                <img src={image_url} alt="product image"  className='h-full bg-white'/>
                <div className='h-full flex flex-col justify-start items-start ml-3'>
                    <h1 className='font-medium'>{title}</h1>
                    <h2 className='text-gray mt-3'>{categorie}</h2>
                    <p className='text-gray mt-1'>{price}Ethr</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
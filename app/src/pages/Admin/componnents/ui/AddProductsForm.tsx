import React from 'react';
import { DropArrow } from '../../../../components/icons/chevron-down-outline';

const AddProductsForm:React.FC = () => {
  
  return (
    <div className='absolute w-screen'>
      <form action="" className=' bg-navBar-bg p-11 mx-auto flex flex-col w-[40%] rounded-xl items-center'>
      {/* Product Name */}
      <div className="mb-4 w-[60%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="title">
          Title
        </label>
        <input className="shadow outline-hidden appearance-none border border-gray border-opacity-20 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Product Name"/>
      </div>
      {/* Product Categories */}
      <div className="mb-4 w-[60%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="categories">
          Categories
        </label>
        <div className='bg-white flex flex-row items-center w-full rounded px-2'>
        <select className='shadow outline-hidden appearance-none   w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="categories" id="categories">
          <option value="T-shirt">T-shirt</option>
          <option value="Jeans">Jeans</option>
          <option value="Perfum">Perfum</option>
        </select>
        <DropArrow className='h-5 w-5 text-black'/>
        </div>
      </div>
      {/* Product STOCK */}
      <div className="mb-4 w-[60%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="stock">
          Stock
        </label>
        <input className="shadow outline-hidden appearance-none border border-gray border-opacity-20 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stock" type="number" min={0} placeholder="Stock"/>
      </div>
      {/* Product Price */}
      <div className="mb-4 w-[60%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="price">
          Price
        </label>
        <input className="shadow outline-hidden appearance-none border border-gray border-opacity-20 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" min={1} placeholder="Price"/>
      </div>
      {/* Product Images */}
      <div className="mb-4 w-[60%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="products_images">
          Product Images
        </label>
          <div className='w-full flex flex-row items-center mt-3'>
            <input className="mr-1 shadow text-white outline-hidden appearance-none border border-gray rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="products_images" type="file" placeholder="file"/>
        </div>
      </div>
        <div className='flex md:flex-row mt-11'>
            <button className='bg-main-color px-3 py-2 text-white mx-3 rounded font-medium'>Add Products</button>
            <button className='text-gray mx-3 font-medium'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddProductsForm
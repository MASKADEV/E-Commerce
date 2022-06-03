import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DropArrow } from '../../../../components/icons/chevron-down-outline';
import GlobalVarialble from '../../../../config/Constant';
import { ProductFormProps, ProductsForm } from '../../../../types';





const AddProductsForm:React.FC<ProductFormProps> = ({showForm, setShowForm}) => {

  const  {register, handleSubmit} = useForm<ProductsForm>();

  const onsubmit = async (data : any) => {
    try {
      let token = localStorage.getItem('token');
      const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        };        
      let res = await axios.post(GlobalVarialble.url + '/admin/addProducts',{
        'title' : data['title'],
        'description' : data['description'],
        'categories' : data['categories'],
        'stock' : data['stock'],
        'price' : data['price'],
        'image_url' : 'https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg',
      },config);
      if(res.data['error'] === true){
        alert(res.data['message'])
      }else {
        window.location.reload();
      }
    }catch(err){
      console.log(err);
    }
  }

  
  return (
    <div className={`w-screen ${!showForm ? 'hidden' : ' absolute'}`}>
      <form encType='multipart/form-data' onSubmit={handleSubmit(onsubmit)} className='bg-navBar-bg p-11 mx-auto flex flex-col w-[40%] rounded-xl items-center mb-11'>
      {/* Product Name */}
      <div className="mb-4 w-[90%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="title">
          Title
        </label>
        <input {...register("title")} className="shadow outline-hidden appearance-none border border-gray border-opacity-20 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Product Name"/>
      </div>
      {/* Product Description */}
      <div className="mb-4 w-[90%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="description">
          Description
        </label>
        <input {...register("description")} className="shadow outline-hidden appearance-none border border-gray border-opacity-20 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Product Description"/>
      </div>
      {/* Product Categories */}
      <div className="mb-4 w-[90%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="categories">
          Categories
        </label>
        <div {...register("categories")} className='bg-white flex flex-row items-center w-full rounded px-2'>
        <select className='shadow outline-hidden appearance-none   w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="categories" id="categories">
          <option value="T-shirt">T-shirt</option>
          <option value="Jeans">Jeans</option>
          <option value="Perfum">Perfum</option>
        </select>
        <DropArrow className='h-5 w-5 text-black'/>
        </div>
      </div>
      {/* Product STOCK */}
      <div className="mb-4 w-[90%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="stock">
          Stock
        </label>
        <input {...register("stock")} className="shadow outline-hidden appearance-none border border-gray border-opacity-20 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stock" type="number" min={0} placeholder="Stock"/>
      </div>
      {/* Product Price */}
      <div className="mb-4 w-[90%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="price">
          Price
        </label>
        <input {...register('price')} className="shadow outline-hidden appearance-none border border-gray border-opacity-20 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" min={1} placeholder="Price"/>
      </div>
      {/* Product Images */}
      <div className="mb-4 w-[90%]">
        <label className="block text-white text-gray-700 text-sm font-medium mb-2" htmlFor="products_images">
          Product Images
        </label>
          <div className='w-full flex flex-row items-center mt-3'>
            <input {...register("image_url")} className="mr-1 shadow text-white outline-hidden appearance-none border border-gray rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="products_images" type="file" placeholder="file"/>
        </div>
      </div>
        <div className='flex md:flex-row mt-11'>
            <input type='submit' className='cursor-pointer bg-main-color px-5 py-2 text-white mx-3 rounded font-medium' placeholder='Add Product'/>
            <button onClick={(e:React.MouseEvent<HTMLButtonElement>) => {e.preventDefault();setShowForm(!showForm)}} className='text-gray mx-3 font-medium'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddProductsForm
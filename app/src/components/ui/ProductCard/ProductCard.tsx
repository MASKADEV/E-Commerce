import React from 'react'

const ProductCard = () => {
  return (    
        <div className="max-w-sm rounded-lg shadow-md bg-hover-bg border-gray text-white">
            <a href="#">
                <img className="p-8 rounded" src="https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-PDP-R01a_700x.jpg" alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900"> VITAL C hydrating anti-aging serum </h5>
                </a>
                <div className="flex justify-between items-center my-3">
                    <span className="md:text-2xl text-lg font-bold text-gray-900 ">$599</span>
                    <a href="#" className="px-6 py-3 bg-main-color border-transparent shadow-sm border-2 hover:border-main-color hover:bg-white hover:text-main-color text-white font-medium rounded-lg ">Add to cart</a>
                </div>
            </div>
        </div>
  )
}

export default ProductCard
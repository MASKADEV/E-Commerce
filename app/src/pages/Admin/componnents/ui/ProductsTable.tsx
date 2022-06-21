import axios from 'axios'
import React from 'react'
import GlobalVarialble from '../../../../config/Constant'
import { ProductsTableProps } from '../../../../types'

const ProductsTable:React.FC<ProductsTableProps> = ({setdata,products, showForm, setShowForm}) => {

  const deleteProduct = async (id?:number, productName?: string) => {
    await axios.post(GlobalVarialble.url + '/admin/deleteProducts', {id});
    alert('Product ' + productName + ' has been deletet')
  }
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 text-white">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Image
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Stock
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded" src={product.image_url} alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{product.title}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{product.stock}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.price} Eth</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className='flex md:flex-row flex-col justify-end'>
                          <button onClick={(e:React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); setdata(product);setShowForm(!showForm)}} className="text-white hidden hover:text-main-color mx-3 font-medium">
                            Edit
                          </button>
                          <button onClick={() => {deleteProduct(product.id, product.title)}} className="text-white hover:text-red-600 mx-3 font-medium">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsTable;
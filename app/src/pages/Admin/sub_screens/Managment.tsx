import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsTable from '../componnents/ui/ProductsTable';
import Pagination from '../componnents/navigation/ManagmentPagination';
import AddProductsForm from '../componnents/ui/AddProductsForm';
import OrdersIcon from '../../../components/icons/orders-icon';
import EditProduct from '../componnents/ui/EditProduct';
import CategoriesManagment from '../componnents/ui/CategoriesManagment';
import GlobalVarialble from '../../../config/Constant';

const Managment:React.FC = () => {
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<any>(false);
  const [productPerPage] = useState<number>(10);
  const [products, setproducts] = useState<any>([{}]);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber:number) => setcurrentPage(pageNumber);
  const [productForm, setProductForm] = useState<boolean>(false); 
  const [editproductForm, setEditProductForm] = useState<boolean>(false); 
  const [showCategories, setShowCategories] = useState<boolean>(false); 
  const [productsData, setProductsData] = useState<any>({
    'title' : '',
    'description' : "",
    'categories' : "",
    'stock' : "",
    'price' : "",
    'image_url' : "",
  });
  
  useEffect(() => {
    let fetchproducts = async () => {
      setLoading(true);
      try{
        let url = GlobalVarialble.url + '/admin/fetchProducts';
        await axios.get(url).then((response : any) => {
          setproducts(response.data)
        });
      }catch(err)
      {
        console.log(err);
      }
      setLoading(false);
      };
      fetchproducts();
  }, [products])
  
  
  return (
    <div className='relative'>
      <br className='mb-11'/>
      <div className="sm:flex sm:items-center md:flex hidden">
        <div className="flex flex-row ml-11">
          <button
            type="button"
            className="py-3 px-3 mr-1 bg-main-color hover:bg-white text-white hover:text-main-color font-medium duration-300 rounded-md"
          >
            <div onClick={(e: React.MouseEvent<HTMLDivElement>) => {e.preventDefault(); setProductForm(!productForm)}} className='flex flex-row items-center'>
              <OrdersIcon className='h-5 w-5 mx-1'/>
              <h1 className='mx-1'>Add Product</h1>
            </div>
          </button>
          <button
            type="button"
            className="py-3 px-3 ml-1 bg-white hover:bg-main-color text-main-color hover:text-white font-medium duration-300 rounded-md"
          >
            <div onClick={(e: React.MouseEvent<HTMLDivElement>) => {e.preventDefault(); setShowCategories(!showCategories)}} className='flex flex-row items-center'>
              <h1 className='mx-1'>Manage Categories</h1>
            </div>
          </button>
        </div>
      </div>
      <CategoriesManagment show={showCategories} setShow={setShowCategories}/>
      <EditProduct data={productsData}  showForm={editproductForm} setShowForm={setEditProductForm}/>
      <AddProductsForm showForm={productForm} setShowForm={setProductForm} />
      <ProductsTable setdata={setProductsData} showForm={editproductForm} setShowForm={setEditProductForm} products={currentProduct} loading={isLoading}/>
      <Pagination productPerPage={productPerPage} products={products.length} paginate={paginate}/>
    </div>
  )
}

export default Managment
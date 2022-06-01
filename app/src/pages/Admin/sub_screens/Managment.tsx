import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsTable from '../componnents/ui/ProductsTable';
import Pagination from '../componnents/navigation/ManagmentPagination';
import AddProductsForm from '../componnents/ui/AddProductsForm';

const Managment:React.FC = () => {
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<any>(false);
  const [productPerPage] = useState<number>(5);
  const [products, setproducts] = useState<any>([{}]);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber:number) => setcurrentPage(pageNumber);

  useEffect(() => {
    let fetchproducts = async () => {
      setLoading(true);
      try{
        let url = 'http://localhost/ecommercefillrouge/rest-api/admin/fetchProducts';
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
  }, [])
  
  
  return (
    <div>
      <br className='mb-11'/>
      <AddProductsForm/>
      <ProductsTable products={currentProduct} loading={isLoading}/>
      <Pagination productPerPage={productPerPage} products={products.length} paginate={paginate}/>
    </div>
  )
}

export default Managment
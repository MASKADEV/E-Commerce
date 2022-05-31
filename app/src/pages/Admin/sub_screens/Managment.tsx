import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsTable from '../componnents/ui/ProductsTable';

const Managment:React.FC = () => {
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<any>(false);
  const [productPerPage, setproductPerPage] = useState<number>(5);
  const [products, setProducts] = useState<any>();



  useEffect(() => {
    const fetchproducts = async () => {
      setLoading(!isLoading);
      let url = 'http://localhost/E-Commerce-Full-Stack/rest-api/admin/fetchProducts';
      let res = await axios.get(url);
      setProducts(res.data);
      setLoading(!isLoading);
    }
    fetchproducts();
  }, [])

  console.log(products);
  
  
  return (
    <div>
      {/* <ProductsTable products={products!} loading={isLoading}/> */}
    </div>
  )
}

export default Managment
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GlobalVarialble from '../../../config/Constant';
import Pagination from '../componnents/navigation/ManagmentPagination';
import OrderTable from '../componnents/ui/ordersTable';

const Orders = () => {


  const [products, setproducts] = useState<any>([{}]);
  const [productPerPage] = useState<number>(10);
  const [currentPage, setcurrentPage] = useState<number>(1);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber:number) => setcurrentPage(pageNumber);




  useEffect(() => {
    let fetchproducts = async () => {
      try{
        let url = GlobalVarialble.url + '/admin/fetchOrders';
        await axios.get(url).then((response : any) => {
          setproducts(response.data)
        });
      }catch(err)
      {
        console.log(err);
      }
      };
      fetchproducts();
  }, [])
  
  return (
   <>
    <OrderTable products={currentProduct} />
    <Pagination productPerPage={productPerPage} products={products.length} paginate={paginate}/>
   </>
  )
}

export default Orders
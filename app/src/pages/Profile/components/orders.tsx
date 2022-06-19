import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GlobalVarialble from '../../../config/Constant';
import Pagination from '../../Admin/componnents/navigation/ManagmentPagination';
import OrderTable from '../../Admin/componnents/ui/ordersTable';

const OrdersUser = () => {


  const [products, setproducts] = useState<any>([{}]);
  const [productPerPage] = useState<number>(10);
  const [currentPage, setcurrentPage] = useState<number>(1);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber:number) => setcurrentPage(pageNumber);

  let fetchOrders = async () => {
    try{
      let token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let url = GlobalVarialble.url + '/user/fetchOrders';
      await axios.get(url, config).then((response : any) => {
        setproducts(response.data)
      });
    }catch(err)
    {
      console.log(err);
    }
    };



  useEffect(() => {
      fetchOrders();
  }, [])
  
  return (
   <>
    <OrderTable products={currentProduct} />
    <Pagination productPerPage={productPerPage} products={products.length} paginate={paginate}/>
   </>
  )
}

export default OrdersUser
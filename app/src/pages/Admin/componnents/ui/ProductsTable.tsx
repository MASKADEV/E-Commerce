import React, { useEffect } from 'react'
import { ProductsTableProps } from '../../../../types'

const ProductsTable:React.FC<ProductsTableProps> = ({products, loading}) => {
    

  return (
    <div>
        <ul>
            {
                products.map((product:any, index) => (
                 <li key={index}>
                    {product.title}
                 </li>    
                ))
            }
        </ul>
    </div>
  )
}

export default ProductsTable
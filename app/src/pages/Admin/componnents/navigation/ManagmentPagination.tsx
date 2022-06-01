import React from 'react'

interface props {
    productPerPage:number,
    products : number,
    paginate : any,
}

const Pagination = ({productPerPage, products, paginate}: props) => {
    const pageNumber:Array<number> = [];
    for(let i:number = 1; i <= Math.ceil(products / productPerPage); i++){
          pageNumber.push(i); 
    }
    return (
      <nav className='text-white w-full my-[2rem]'>
        <ul className='flex flex-row items-center justify-center'>
          {
            pageNumber.map((number:any, index) => (
                <li className='mx-3 text-center rounded-md bg-navBar-bg shadow-sm font-medium'>
                <button className='px-3 py-3 w-[3rem]' onClick={() =>{paginate(number)}}>{number}</button>
                </li>
            ))
          }
        </ul>
      </nav>
    )
}

export default Pagination
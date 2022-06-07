import axios from 'axios'
import React, { useEffect } from 'react'
import GlobalVarialble from '../../../../config/Constant'

interface props {
    show : boolean,
    setShow : React.Dispatch<React.SetStateAction<boolean>>
}

const CategoriesManagment:React.FC<props> = ({show, setShow}) => {

    const fetchCategories = async () => {
        let {data} = await axios.get(GlobalVarialble.url + '/admin/fetchCategories',);
        console.log(data);
        return (
            data.map((element : any) => (
                <div className='px-3 py-2 w-full bg-white text-black'>element['title']</div>
            ))
        )
    }

    useEffect(() => {
        fetchCategories();
    }, [])
    
    
  return (
    <div className={`w-screen ${!show && 'hidden'} absolute top-[10rem]`}>
        <div className='bg-navBar-bg p-11 mx-auto flex flex-col w-[30rem] rounded-xl items-center mb-11'>
            <form className='flex flex-col w-[90%]'>
                <label className="block text-white">Manage Categories</label>
                <div className='flex flex-row items-center w-full justify-between mt-3'>
                    <input type="text" placeholder="Manage Categories" className="block p-3 w-[90%] rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                    <button className='text-white ml-3 text-2xl cursor-pointer p-4 ' onClick={(e:React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); fetchCategories()} }>+</button>
                </div>
            </form>
            <div>
            {/* {fetchCategories()} */}
            </div>
        </div>
    </div>
  )
}

export default CategoriesManagment
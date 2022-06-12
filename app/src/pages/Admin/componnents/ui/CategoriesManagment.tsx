import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { CloseIcon } from '../../../../components/icons/close-icon'
import EditIcon from '../../../../components/icons/edit-icon'
import GlobalVarialble from '../../../../config/Constant'

interface props {
    show : boolean,
    setShow : React.Dispatch<React.SetStateAction<boolean>>
}

const CategoriesManagment:React.FC<props> = ({show, setShow}) => {
    const [categories, setcategories] = useState<object[]>([{}]);
    const [editorAdd, setchoice] = useState<boolean>(false);
    const category = useRef<any>("");
    const [id, setID] = useState<number | null>();

    //Fetch Categories
    const fetchCategories = async () => {
        let {data} = await axios.get(GlobalVarialble.url + '/admin/fetchCategories',);
        setcategories(data);
    }

    useEffect(() => {
        fetchCategories();
    }, [])
    
    //Add and Edit Categories
    const addCategory = async () => {
        if(category.current.value !=="" && editorAdd !== true){
            await axios.post(GlobalVarialble.url + '/admin/addCategories', {'title' : category.current.value});            
            category.current.value = "";
            fetchCategories();  
        }else if (category.current.value !=="" && editorAdd !== false){
            await axios.post(GlobalVarialble.url + '/admin/editCategories', {id, 'title':category.current.value});
            setchoice(false);
            category.current.value = "";
            setID(null);
            fetchCategories();
        }
    }

    //Delete Categories
    const deleteCategory = async (id:number) => {
        await axios.post(GlobalVarialble.url + '/admin/deleteCategories', {id});
        fetchCategories();
    }


  return (
    <div className={`w-screen ${!show && 'hidden'} absolute top-[10rem] z-30`}>
        <div className='bg-navBar-bg p-11 mx-auto flex flex-col w-[30rem] rounded-xl items-center mb-11'>
            <form className='flex flex-col w-[90%]'>
                <div className='flex flex-row w-full items-center justify-between'>
                 <label className="block text-white">Manage Categories</label>
                 <CloseIcon onClick={(e : React.MouseEvent<HTMLOrSVGElement>) => {e.preventDefault(); setShow(!show)}} className='text-white cursor-pointer h-[1rem] hover:h-[1.3rem] duration-150'/>
                </div>
                <div className='flex flex-row items-center w-full justify-between mt-3 '>
                    <input ref={category} type="text" placeholder="Manage Categories" className="block p-3 w-[90%] rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                    <button onClick={(e : React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); addCategory()}} className='text-white ml-3 text-2xl p-4'>+</button>
                </div>
            </form>
            <div className='text-white w-[90%] mt-4'>
                {categories.map((trip : any, index) => (
                    <div key={index} className='mt-4 border px-3 py-3 rounded-md'>
                        <div className='w-full flex felx-row justify-between'>
                            <div>{trip['title']}</div>
                            <div>
                                <button onClick={(e : React.MouseEvent<HTMLButtonElement>) => {e.preventDefault();setchoice(true); category.current.value = trip['title']; setID(trip['id'])}} className='mr-2'><EditIcon className='h-[0.75rem] hover:h-[1rem] text-white duration-100' /></button>
                                <button onClick={(e : React.MouseEvent<HTMLButtonElement>) => {e.preventDefault();deleteCategory(trip['id'])}} className='ml-2 text-red-400 hover:font-medium duration-100'>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CategoriesManagment
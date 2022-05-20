import React from 'react'
import { navBarProps } from '../../../types'
import { CloseIcon } from '../../icons/close-icon'

const AddToCart:React.FC<navBarProps> = ({showPanier, setShowPanier}) => {
  return (
    <div className={`fixed h-full ${!showPanier ? ' -right-[30rem]' : ' right-0'} top-0 w-[25rem] z-30 duration-300 ease-out bg-navBar-bg text-white`}>
        <CloseIcon onClick={() => {setShowPanier(!showPanier)}} className=' absolute top-9 right-8 h-6 cursor-pointer'/>
        <div className=' relative flex flex-col mt-[8rem] h-[70%] overflow-x-hidden'>
        </div>
    </div>
  )
}

export default AddToCart
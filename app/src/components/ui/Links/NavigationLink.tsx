import React from 'react'
import { NavBarLinks } from '../../../types';
import { Link } from "react-router-dom";


const NavigationLink : React.FC<NavBarLinks> = ({link , title}) => {
  return (
      <div className='md:my-4 my-0 font-medium text-sm md:flex hidden'>
          <Link to={link}>{title}</Link>
      </div>
  );
}

export default NavigationLink
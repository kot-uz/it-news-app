import React from 'react';
import { Link } from 'react-router-dom';


export function Navigation (){
  return (
    <nav className="flex flex-row justify-between items-center  h-[48px] bg-cyan-700 text-white">
      <h5 className="ml-3">
        it-news
      </h5>
      <span>
        <Link className='mr-3' to="/">Home</Link>
        <Link className='mr-3' to="/news/add">Add news</Link>
      </span>
    </nav>
  )
}

export default Navigation;
import React from 'react';
import { SlArrowDown } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
const Search = () => {
  return (
    <div className="Search-box bg-white py-4 px-8 rounded-xl mt-2 mb-5 flex items-center font-sans justify-between">
      <div className="user flex items-center gap-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcoqcKnx3dPUMN45lBEOBeg60JpY5f_soHQ&usqp=CAU" alt="" className='w-8 h-8 rounded-full' />
        <h1 className='text-16px font-serif '>Hi, Super Admin</h1>
        < SlArrowDown className='mb-1 mr-5 text-[0.6rem]' />
      </div>
      <div className="dropdown py-1 px-1 border-2 border-gray-200 rounded-md ">
      <TfiWorld className='inline-block ml-1 text-[18px] mb-[0.2rem]' />
        <select className="outline-none">
          <option >English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>German</option>
        </select>
       
      </div>
    </div>
  );
};

export default Search;

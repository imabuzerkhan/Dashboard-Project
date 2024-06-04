
import React from 'react';
import { CiSearch } from "react-icons/ci";
const SearchBox = () => {
  return (
    <div className="flex items-center p-4  ">
      <button className="p-2 bg-purple-600 text-white rounded-lg mr-2">
        <i className="fas fa-filter"></i>
      </button>
      <div className="main-input bg-white flex items-center justify-center px-4 py-2 cursor-pointer  w-full  border-gray-300 rounded-lg ">
      <input
        type="text"
        placeholder="Search..."
       
        className=" outline-none "
      />
       <CiSearch />
       </div>
    </div>
  );
};

export default SearchBox;

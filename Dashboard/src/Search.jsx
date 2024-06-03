import React from 'react'
import { SlArrowDown } from "react-icons/sl";

const Search = () => {
  return (
  <>
  <div className="Serach-box bg-white py-4 px-8 rounded-xl mt-2 mb-5 flex items-center font-sans justify-between">
   <div className="user flex items-center justify-center  gap-3 ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcoqcKnx3dPUMN45lBEOBeg60JpY5f_soHQ&usqp=CAU" alt=""  className='w-8 h-8 rounded-full '/>
    <h1 className='text-[16px] '>Hi ,Super Admin</h1>< SlArrowDown />
   </div>
   <div className="dropdown">
    <h2>My name</h2>
   </div>
  </div>
  
  </>
  )
}

export default Search

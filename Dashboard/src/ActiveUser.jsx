import React from 'react';
import Search from './Search';
import SearchBox from './SearchBox';

import CustomerData from './CustomerData';
import ButtonGroup from './ButtonGroup';
const ActiveUser = () => {
  

  return (
    <div className=" w-full">
     
      <div className="p-6 flex flex-col w-full">
        <Search />
        <h1 className='text-[20px] font-serif ' >Active Users</h1>
        <div className="Search-box flex items-center justify-between">
          <SearchBox></SearchBox>
         <ButtonGroup></ButtonGroup>
        </div>
        <div className="Coustomer-data">

<CustomerData></CustomerData>
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;

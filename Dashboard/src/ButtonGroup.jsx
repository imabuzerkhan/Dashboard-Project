
import React from 'react';
import { FaFilePdf } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
const ButtonGroup = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="flex items-center justify-center w-10 h-10  rounded-md">
      <FaFilePdf className='text-red-800 text-[30px]' />
      </button>
      <button className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-md">
      <SiMicrosoftexcel  className='text-green-800 text-[30px]' />
      </button>
      <button className="flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md">
        + Add
      </button>
    </div>
  );
};

export default ButtonGroup;

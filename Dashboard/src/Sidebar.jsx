import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaClipboardList, FaChartBar, FaDollarSign, FaEnvelope, FaCogs } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className=" sticky top-0 left-0 pb-6 w-64 bg-gray-300 text-black rounded-r-2xl flex flex-col font-sans h-full px-4">
      <nav className="mt-10">
        <ul>
          <li className="my-2">
            <NavLink to="/" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 flex items-center ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}>
              <FaTachometerAlt className="mr-3" /> Dashboard
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/customers" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 flex items-center ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}>
              <FaUsers className="mr-3" /> Customers
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/plans" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 flex items-center ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}>
              <FaClipboardList className="mr-3" /> Active Users
            </NavLink>
          </li>
          <li className="my-2">
            <Link    className= "block py-2.5 px-4 rounded transition duration-200 flex items-center  hover:bg-blue-900 hover:text-white">
              <FaCogs className="mr-3" />Monthly Offers
            </Link>
          </li>
          <li className="my-2">
            <Link    className= "block py-2.5 px-4 rounded transition duration-200 flex items-center  hover:bg-blue-900 hover:text-white">
              <FaCogs className="mr-3" /> Revenue
            </Link>
          </li>
          <li className="my-2">
            <Link    className= "block py-2.5 px-4 rounded transition duration-200 flex items-center  hover:bg-blue-900 hover:text-white">
              <FaCogs className="mr-3" /> Email Templates
            </Link>
          </li>
          <li className="my-2">
            <Link    className= "block py-2.5 px-4 rounded transition duration-200 flex items-center  hover:bg-blue-900 hover:text-white">
              <FaCogs className="mr-3" /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

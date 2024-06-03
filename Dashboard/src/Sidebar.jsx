import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaClipboardList, FaChartBar, FaDollarSign, FaEnvelope, FaCogs } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-300 text-black rounded-r-2xl flex flex-col font-sans h-full px-5">
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
              <FaClipboardList className="mr-3" /> Plans
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/orders" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 flex items-center ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}>
              <FaChartBar className="mr-3" /> Monthly Orders
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/revenue" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 flex items-center ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}>
              <FaDollarSign className="mr-3" /> Revenue
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/email-templates" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 flex items-center ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}>
              <FaEnvelope className="mr-3" /> Email Templates
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink to="/settings" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 flex items-center ${isActive ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}>
              <FaCogs className="mr-3" /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Search from './Search';
const Dashboard = () => {
  return (
    <div className="p-6 flex flex-col w-full">
       <Search></Search>
      <div className="text-2xl font-bold mb-4">Dashboard</div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded">Total Customers</div>
        <div className="bg-pink-500 text-white p-4 rounded">Total Plans</div>
        <div className="bg-orange-500 text-white p-4 rounded">Total Active Users</div>
        <div className="bg-green-500 text-white p-4 rounded">Inactive Users</div>
        <div className="bg-purple-500 text-white p-4 rounded">About to Expire</div>
        <div className="bg-yellow-500 text-white p-4 rounded">Expired</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">Plans</div>
        <div className="bg-white p-4 rounded shadow">Monthly Orders</div>
        <div className="bg-white p-4 rounded shadow col-span-2">Revenue</div>
      </div>
    </div>
  );
};

export default Dashboard;

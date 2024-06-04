import React from 'react';
import Search from './Search';
import DonutChart from './Charts';
import BarChart from './Small';
import BarCharts from './BigBar';
const Dashboard = () => {
  return (
    <div className="p-6 flex flex-col w-full">
       <Search></Search>
      <div className="text-2xl font-bold mb-4">Dashboard</div>
      <div className="inform-text bg-purple-400 py-3 px-3 text-[14px] text-start rounded text-white mb-4 font-serif  ">Hi, Welcome to your dashboard. here you find statitics of the admin pannel</div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-blue text-white p-4 rounded h-32 flex  justify-center flex-col ">
          <h2>17</h2>
          <h3>Total Customers</h3>
        </div>
        <div className="bg-gradient-pink text-white p-4 rounded h-32 flex  justify-center flex-col ">
          <h2>17</h2>
          <h3>Total Customers</h3>
        </div>
        <div className="bg-gradient-orange text-white p-4 rounded h-32 flex  justify-center flex-col ">
          <h2>17</h2>
          <h3>Total Customers</h3>
        </div>
        <div className="bg-gradient-green text-white p-4 rounded h-32 flex  justify-center flex-col ">
          <h2>17</h2>
          <h3>Total Customers</h3>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded h-32 flex  justify-center flex-col ">
          <h2>17</h2>
          <h3>Total Customers</h3>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded h-32 flex  justify-center flex-col ">
          <h2>17</h2>
          <h3>Total Customers</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
     <DonutChart></DonutChart>
<BarChart></BarChart>       

      </div>
      <div className="next-card mt-4 mb-8">
      <BarCharts></BarCharts>
      </div>
    </div>
  );
};

export default Dashboard;

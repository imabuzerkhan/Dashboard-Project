import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Customers from './Customers';
import ActiveUser from './ActiveUser';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen flex">
        <Sidebar />
        <div className="p-6 flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers/" element={<Customers />} />
            <Route path="/plans" element={<ActiveUser />} />
            

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

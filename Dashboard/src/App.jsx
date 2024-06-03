import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Customers from './Customers';
import Plans from './Plans';



const App = () => {
  return (
    <Router>

      <div className="bg-gray-200 min-h-screen flex ">
        <Sidebar />
       
        <Dashboard></Dashboard>
        <div className=" p-6  ">
         <Routes>
         <Route exact path="/" component={Dashboard} />
            <Route path="/customers" component={Customers} />
            <Route path="/plans" component={Plans} />
         </Routes>
         
     
           
          
        
        </div>
      </div>
    </Router>
  );
};

export default App;

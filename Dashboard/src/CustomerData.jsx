// Customers.js
import React from 'react';

import Table from './Table';

const CustomerData = () => {
  const customers = [
    { name: 'Priyal Pandey', id: '23TN244012', phone: '6797977791', package: 'Business Pro', startDate: '21-09-2024' },
    { name: 'Priyal Pandey', id: '23TN244012', phone: '6797977791', package: 'Business Pro', startDate: '21-09-2024' },
    { name: 'Priyal Pandey', id: '23TN244012', phone: '6797977791', package: 'Business Pro', startDate: '21-09-2024' },
    { name: 'Priyal Pandey', id: '23TN244012', phone: '6797977791', package: 'Business Pro', startDate: '21-09-2024' },
    { name: 'Priyal Pandey', id: '23TN244012', phone: '6797977791', package: 'Business Pro', startDate: '21-09-2024' },
    { name: 'Priyal Pandey', id: '23TN244012', phone: '6797977791', package: 'Business Pro', startDate: '21-09-2024' },
  ];

  return (
    <div className="p-6 w-full">
      
      <div className="mt-4">
        <Table customers={customers} />
      </div>
    </div>
  );
};

export default CustomerData;

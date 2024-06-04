// Table.js
import React from 'react';

const Table = ({ customers = [] }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-4">
      <table className="min-w-full bg-white">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="py-3 px-4">Serial No.</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Customer Id</th>
            <th className="py-3 px-4">Phone</th>
            <th className="py-3 px-4">Package</th>
            <th className="py-3 px-4">Start Date</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="text-center">
              <td className="py-3 px-4 border">{index + 1}.</td>
              <td className="py-3 px-4 border">{customer.name}</td>
              <td className="py-3 px-4 border">{customer.id}</td>
              <td className="py-3 px-4 border">{customer.phone}</td>
              <td className="py-3 px-4 border">{customer.package}</td>
              <td className="py-3 px-4 border">{customer.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

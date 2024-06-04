import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarCharts = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'This Year',
        data: [120, 150, 180, 220, 200, 210, 190, 170, 160, 180, 190, 210],
        backgroundColor: 'rgb(30, 58, 138)',
        borderColor: 'rgba(54, 79, 107, 1)',
        borderWidth: 1,
        barThickness: 13,
        barPercentage: 0.6,
        categoryPercentage: 0.8,

      },
      {
        label: 'Previous Year',
        data: [100, 140, 160, 240, 245, 190, 150, 140, 170, 200, 220, 230],
        backgroundColor: 'rgba(211, 211, 211 , 1)',
        borderColor: 'rgba(173, 216, 230, 1)',
       
        borderWidth: 1,
        barThickness: 13,
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + 'k';
          },
        },
      },
      x: {
        grouped: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center p-4 w-full bg-white ">
      <h2 className="text-xl font-bold mb-4 self-start px-4 ">Revenue</h2>
      <div className="w-[800px] ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarCharts;

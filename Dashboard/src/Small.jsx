import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [40, 20, 60, 30, 50, 70, 20],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 15, 
        borderRadius: {
          topLeft: 10,
          topRight: 10,
        },
        backgroundColor: 'rgb(30, 58, 138)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
     
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col  p-4 bg-white">
            <div className="flex  justify-between mt-4">
        <h2 className="text-xl font-bold mb-4  px-4 ">Monthly Orders</h2>
        <span className="text-green-600 text-xl font-bold mr-2 font-serif ">+2.45%</span>
  </div>
      <div className="w-full">
        <Bar data={data} options={options} />
      </div>
      
    </div>
  );
};

export default BarChart;

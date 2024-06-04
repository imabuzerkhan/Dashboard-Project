import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Business Starter', 'Business Standard', 'Business Premium', 'Business Pro'],
    datasets: [
      {
        data: [27, 26, 25, 23],
        backgroundColor: ['#34D399', '#3B82F6', '#8B5CF6', '#EC4899'],
        hoverBackgroundColor: ['#34D399', '#3B82F6', '#8B5CF6', '#EC4899'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  const renderLegend = () => {
    return data.labels.map((label, index) => (
      <div key={index} className="flex items-center mx-2 text-sm">
        <span
          className="inline-block w-3 h-3 mr-2"
          style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
        ></span>
        <span>{label} ({data.datasets[0].data[index]}%)</span>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center bg-white  py-4 ">
      <h2 className="text-xl font-bold mb-4 self-start px-4 ">Plans</h2>
      <div className="w-48"> {/* Reduced chart size */}
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex mt-4 justify-center flex-wrap">
        {renderLegend()}
      </div>
    </div>
  );
};

export default DonutChart;

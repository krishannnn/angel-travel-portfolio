import React, { useEffect, useState } from 'react';

import axios from 'axios';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MetricsChart = () => {

  const [metrics, setMetrics] = useState({
    bookings: 0,
    customers: 0,
    revenue: 0
  });

  useEffect(() => {

    fetchMetrics();

  }, []);

  const fetchMetrics = async () => {

    try {

      const response = await axios.get(
        'http://127.0.0.1:8000/api/metrics'
      );

      setMetrics(response.data);

    } catch (error) {

      console.log(error.message);

    }

  };

  const data = {

    labels: ['Bookings', 'Customers', 'Revenue'],

    datasets: [
      {
        label: 'Travel Analytics',
        data: [
          metrics.bookings,
          metrics.customers,
          metrics.revenue
        ],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)'
      }
    ]
  };

  const options = {

    responsive: true,

    plugins: {

      legend: {
        position: 'top'
      },

      title: {
        display: true,
        text: 'Angel Travel Analytics'
      }
    }
  };

  return (

    <section className="py-12 bg-gray-100">

      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">

        <Line data={data} options={options} />

      </div>

    </section>
  );
};

export default MetricsChart;
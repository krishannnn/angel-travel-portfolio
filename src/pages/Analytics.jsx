// src/pages/Analytics.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaUsers, FaChartLine, FaMoneyBillAlt } from 'react-icons/fa';

const Analytics = () => {
  const [metrics, setMetrics] = useState({
    totalCustomers: 0,
    activeTrips: 0,
    revenue: 0
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      // Simulate fetching data from an API
      const response = await axios.get('/api/metrics'); // Replace with your actual API endpoint
      setMetrics(response.data);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-500">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-8">
          <div className="glassmorphism p-6 space-y-4 flex items-center justify-between">
            <FaUsers size={48} className="text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold text-blue-500">Total Customers</h3>
              <p>{metrics.totalCustomers}</p>
            </div>
          </div>
          <div className="glassmorphism p-6 space-y-4 flex items-center justify-between">
            <FaChartLine size={48} className="text-green-500" />
            <div>
              <h3 className="text-xl font-semibold text-green-500">Active Trips</h3>
              <p>{metrics.activeTrips}</p>
            </div>
          </div>
          <div className="glassmorphism p-6 space-y-4 flex items-center justify-between">
            <FaMoneyBillAlt size={48} className="text-yellow-500" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-500">Revenue</h3>
              <p>{metrics.revenue}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;

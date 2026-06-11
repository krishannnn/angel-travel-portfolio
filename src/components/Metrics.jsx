import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Metrics = () => {

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

      console.error(error.message);

    }

  };

  return (

    <section className="py-12 bg-gray-50">

      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">

        <div className="bg-white p-6 rounded-lg shadow-md text-center">

          <h3 className="text-xl font-semibold mb-2">
            Bookings
          </h3>

          <p className="text-2xl">
            {metrics.bookings}
          </p>

        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">

          <h3 className="text-xl font-semibold mb-2">
            Customers
          </h3>

          <p className="text-2xl">
            {metrics.customers}
          </p>

        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">

          <h3 className="text-xl font-semibold mb-2">
            Revenue
          </h3>

          <p className="text-2xl">
            ${metrics.revenue}
          </p>

        </div>

      </div>

    </section>
  );
};

export default Metrics;
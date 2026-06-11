// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Metrics from '../components/Metrics';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import MetricsChart from '../components/MetricsChart';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Services />
      {/* Other sections will go here */}
      <Metrics />
      <MetricsChart />
      <Footer />
    </div>
  );
};

export default Home;

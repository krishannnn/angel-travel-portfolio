import React from 'react';
import Navbar from '../components/Navbar';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-500">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mt-8">
          <div className="glassmorphism p-6 space-y-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-blue-500">Package Tours</h3>
            <p>Explore the world with our curated package tours. From luxury cruises to adventure hikes, we have something for everyone.</p>
          </div>
          <div className="glassmorphism p-6 space-y-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-blue-500">Custom Trips</h3>
            <p>Let us help you plan the perfect custom trip. Whether it's a romantic getaway or a family adventure, we'll make sure every detail is taken care of.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

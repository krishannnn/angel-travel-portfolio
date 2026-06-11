// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaHotel, FaAddressCard } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">Discover the World</h1>
          <p className="max-w-3xl mx-auto text-lg">Experience amazing trips with us. Book your next adventure today.</p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">Book Now</button>
            <button className="px-8 py-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out">Explore Services</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

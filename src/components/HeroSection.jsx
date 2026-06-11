// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center text-white">
      <div className="text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Angel Travel
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl mb-8"
        >
          Professional Travel Booking & Operations Portfolio
        </motion.p>
        <div className="flex space-x-4">
          <motion.button 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200"
          >
            Explore Services
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="bg-transparent text-white px-6 py-3 rounded-full border border-white hover:bg-gray-800"
          >
            View Analytics
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-500">About Us</h2>
        <p className="text-gray-300 mt-4">
          At Angel Travel, we provide exceptional travel services tailored to meet your every need. Our team of experienced professionals ensures that every journey is memorable and hassle-free.
        </p>
      </section>
    </div>
  );
};

export default About;

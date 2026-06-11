// src/components/Services.jsx
import React from 'react';
import { FaPlane, FaHotel, FaAddressCard, FaUsers, FaCalendarAlt, FaHeart } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaPlane size={40} />,
    title: "Flight Booking",
    description: "Book your flights with us and enjoy the best deals."
  },
  {
    icon: <FaHotel size={40} />,
    title: "Hotel Booking",
    description: "Find the perfect hotel for your trip at competitive rates."
  },
  {
    icon: <FaAddressCard size={40} />,
    title: "Visa Assistance",
    description: "Get help with all your visa requirements and travel documents."
  },
  {
    icon: <FaUsers size={40} />,
    title: "Tour Packages",
    description: "Explore new destinations with our curated tour packages."
  },
  {
    icon: <FaCalendarAlt size={40} />,
    title: "Group Tours",
    description: "Join a group tour and make unforgettable memories."
  },
  {
    icon: <FaHeart size={40} />,
    title: "Honeymoon Trips",
    description: "Celebrate your love with the best honeymoon trips."
  }
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Travel Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

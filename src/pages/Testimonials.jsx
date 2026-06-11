// src/components/Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    profile: "https://source.unsplash.com/100x100/?portrait",
    name: "John Doe",
    rating: 5,
    review: "Absolutely loved our trip! The service was excellent and the travel packages were top-notch."
  },
  {
    profile: "https://source.unsplash.com/100x100/?woman",
    name: "Jane Smith",
    rating: 4.5,
    review: "Great experience with their hotel booking and flight services. Highly recommended!"
  },
  {
    profile: "https://source.unsplash.com/100x100/?man",
    name: "Michael Brown",
    rating: 4,
    review: "Had a fantastic honeymoon trip organized by them. The tour guides were knowledgeable and the places visited were amazing."
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <img src={testimonial.profile} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((star, i) => (
                    <FaStar key={i} size={16} color="#FFD700" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

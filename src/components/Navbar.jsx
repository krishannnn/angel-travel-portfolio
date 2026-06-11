// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaChartLine, FaMoneyBillAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold" aria-label="Home">Angel Travel</Link>
        <ul className={`md:flex space-x-6 hidden ${isOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/about" className="hover:text-gray-300 transition duration-300 ease-in-out" aria-label="About Us">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-300 transition duration-300 ease-in-out" aria-label="Our Services">Services</Link></li>
          <li><Link to="/analytics" className="hover:text-gray-300 transition duration-300 ease-in-out" aria-label="Analytics">Analytics</Link></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-expanded={isOpen} aria-label={isOpen ? 'Close Menu' : 'Open Menu'} className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            {isOpen ? <FaChartLine size={24} /> : <FaUsers size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

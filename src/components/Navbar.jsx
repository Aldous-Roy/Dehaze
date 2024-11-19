import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white py-4 shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LIL</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-coral transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/patent" className="hover:text-coral transition duration-300">Patent</Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-coral transition duration-300">Project</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-coral transition duration-300">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

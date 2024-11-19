import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white py-4 shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Image Dehazing Co.</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-coral transition duration-300">Home</a>
          </li>
          <li>
            <a href="#services" className="hover:text-coral transition duration-300">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-coral transition duration-300">About Us</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-coral transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

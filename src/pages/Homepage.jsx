import React from 'react';
import Comp from './Comp';

const Homepage = () => {
  return (
    <div className="bg-light-gray">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Clear Your Vision</h1>
          <p className="text-lg mb-8">Dehazing your images for a sharper and clearer view.</p>
          <button className="bg-white text-teal-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Image Dehazing</h3>
                <p>Enhance your images by removing haze and fog.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Restoration</h3>
                <p>Restore old images to their former glory.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Photo Enhancement</h3>
                <p>Improve color, contrast, and clarity in your images.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-light-gray">
        <Comp />
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Transform Your Images Today</h2>
        <p className="mb-8">Experience the difference with our dehazing service!</p>
        <button className="bg-white text-teal-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Homepage;
    
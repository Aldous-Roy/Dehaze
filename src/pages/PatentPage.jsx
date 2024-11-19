import React from 'react';

const PatentPage = () => {
  const patentDetails = {
    patentNumber: "202441076191",
    title: "ENHANCING VISUAL CLARITY IN HAZY AND SMOKY ENVIRONMENTS USING DARK CHANNEL PRIOR",
    description: "This patent covers innovative algorithms and methods for removing haze from images, enhancing clarity and detail in photographs.",
    registrationDate: "18 October 2024",
    registeredIn: "India Patent Office",
    img:"/src/assets/Ip.png"
  };
  return (
    <div className="bg-gray-50 py-16 mt-5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Patent</h2>
        <div className="bg-white shadow-md rounded-lg p-8 mx-auto max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">{patentDetails.title}</h3>
          <p className="text-lg text-gray-800 mb-2"><strong>Patent Number:</strong> {patentDetails.patentNumber}</p>
          <p className="text-lg text-gray-800 mb-2"><strong>Registration Date:</strong> {patentDetails.registrationDate}</p>
          <p className="text-lg text-gray-800 mb-2"><strong>Registered In:</strong> {patentDetails.registeredIn}</p>
          <p className="mt-4 text-gray-600">{patentDetails.description}</p>
          <img src={patentDetails.img} alt="Patent Image" className="mt-8 mb-4" />
        </div>
      </div>
    </div>
  );
};

export default PatentPage;

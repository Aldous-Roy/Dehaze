import React from 'react';

const ImageComparison = ({ img1, img2 }) => {
  return (
    <div className="flex justify-around items-center my-10">
      <div className="w-1/2 text-center">
        <h3 className="font-bold mb-2">Original Image</h3>
        <div className='flex justify-center items-center'>
            <img src={img1} alt="First" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="w-1/2 text-center">
        <h3 className="font-bold mb-2">Dehazed Image </h3>
        <div className='flex justify-center items-center'>
            <img src={img2} alt="First" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;

import React from 'react'
import ImageComparison from '../components/ImageComparison';
const Comp = () => {
    const img1 = './src/assets/Unknown.jpg'; // Replace with the path to the first image
    const img2 = './src/assets/Unknown.jpg'; // Replace with the path to the second image

  return (
    <div>
         <h1 className="text-3xl font-bold text-center my-5">Image Comparison with Slider</h1>
         <ImageComparison img1={img1} img2={img2} />
    </div>
  )
}

export default Comp
import React from 'react';

// ImageCard component
const ImageCard = ({ imageUrl, imageName }) => {
  return (
    // Adjust the max-width class to make the images bigger
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 ">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <img src={imageUrl} alt="Latest" className="w-full h-auto object-cover rounded-lg" />
        <p className="text-center text-lg mt-2">{imageName.slice(0, -5).replace('T', ' ')}</p>
      </div>
    </div>
  );
};

export default ImageCard;

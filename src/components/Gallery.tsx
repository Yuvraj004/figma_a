import React from 'react';

const Gallery = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white mt-4">
      <h2 className="text-lg font-bold">Gallery</h2>
      <div className="flex justify-between items-center mt-2">
        <button className="text-white">&#10094;</button>
        <div className="flex items-center space-x-4">
          {/* Add images here */}
          <div className="bg-gray-700 w-24 h-24 rounded-lg"></div>
          <div className="bg-gray-700 w-24 h-24 rounded-lg"></div>
        </div>
        <button className="text-white">&#10095;</button>
      </div>
    </div>
  );
};

export default Gallery;

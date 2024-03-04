import React from 'react';

function CarDetails({ car, brand, year, location, speed }) {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Car Details</h2>
      <div className="space-y-1">
        <p class="font-body"><span className="font-medium">Owner:</span> {car}</p>
        <p class="font-body"><span className="font-medium">Brand:</span> {brand}</p>
        <p class="font-body"><span className="font-medium">Year:</span> {year}</p>
        <p class="font-body"><span className="font-medium">Location:</span> {location}</p>
        <p class="font-body"><span className="font-medium">Speed:</span> {speed}</p>
      </div>
    </div>
  );
}

export default CarDetails;

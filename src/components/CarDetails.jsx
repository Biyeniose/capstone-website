import React, { useState, useEffect } from 'react';

function CarDetails() {
  // State variables for storing specific vehicle details
  const [owner, setOwner] = useState('');
  const [brand, setBrand] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [vehicleID, setVehicleID] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  useEffect(() => {
    // Function to fetch vehicle data
    const fetchVehicleData = async () => {
      try {
        const response = await fetch('https://vg02capstone.cyclic.app/Vehicles/65b330f3000bb6dcce6a6c45');
        const vehicle = await response.json();
        // Update state variables with the vehicle data
        setOwner(vehicle.owner || '');
        setBrand(vehicle.makeAndModel || '');
        setRegistrationNumber(vehicle['registrationNumber'] || ''); // Adjusted for space in key
        setVehicleID(vehicle['vehicleId'] || ''); // Adjusted for space in key
        setVehicleType(vehicle['vehicleType'] || ''); // Adjusted for space in key
      } catch (error) {
        console.error("Failed to fetch vehicle data:", error);
      }
    };

    fetchVehicleData();
  }, []); // This ensures the effect runs only once after the initial render

  return (
    <div className="bg-white font-inter_t p-6 shadow-md rounded-lg mt-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Vehicless</h2>
      <div className="space-y-1">
        <p><span className="font-medium">Owner:</span> {owner}</p>
        <p><span className="font-medium">Brand:</span> {brand}</p>
        <p><span className="font-medium">Registration Number:</span> {registrationNumber}</p>
        <p><span className="font-medium">Vehicle ID:</span> {vehicleID}</p>
        <p><span className="font-medium">Vehicle Type:</span> {vehicleType}</p>
      </div>
    </div>
  );
}

export default CarDetails;

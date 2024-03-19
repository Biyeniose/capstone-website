import React, { useState, useEffect } from 'react';
import VehicleData from './api-data/VehicleData';

function CarDetails() {
  // State variable for storing the array of vehicles
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Function to fetch vehicles data
    const fetchVehiclesData = async () => {
      try {
        const response = await fetch('https://vg02capstone.cyclic.app/Vehicles'); // Adjusted URL to fetch an array of vehicles
        const vehiclesArray = await response.json();
        // Update state variable with the vehicles data
        setVehicles(vehiclesArray || []);
      } catch (error) {
        console.error("Failed to fetch vehicles data:", error);
      }
    };

    fetchVehiclesData();
  }, []); // This ensures the effect runs only once after the initial render

  return (
    <div className="bg-white font-inter_t p-6 shadow-md rounded-lg mt-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Vehicles</h2>
      <div className="space-y-1">
        {vehicles.map(vehicle => (
          <VehicleData 
            key={vehicle.vehicleId} // Assuming each vehicle has a unique vehicleId
            owner={vehicle.owner}
            brand={vehicle.makeAndModel} // Adjusted according to your previous mapping
            registrationNumber={vehicle.registrationNumber}
            vehicleID={vehicle.vehicleId}
            vehicleType={vehicle.vehicleType}
          />
        ))}
      </div>
    </div>
  );
}

export default CarDetails;

import React, { useState, useEffect } from 'react';
import VehicleData from './api-data/VehicleData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CarDetails() {
  // State variable for storing the array of vehicles
  const [vehicles, setVehicles] = useState([]);
  // State for storing the initial and final timestamps
  const [timestamp1, setTimestamp1] = useState('');
  const [timestamp2, setTimestamp2] = useState('');

  useEffect(() => {
    // Function to fetch vehicles data
    const fetchVehiclesData = async () => {
      try {
        const response = await fetch('https://vg02-63d7450628e1.herokuapp.com/Vehicles');
        const vehiclesArray = await response.json();
        setVehicles(vehiclesArray || []);
      } catch (error) {
        console.error("Failed to fetch vehicles data:", error);
      }
    };

    // Function to fetch the initial timestamp
    const fetchInitialTimestamp = async () => {
      try {
        const response = await fetch('https://vg02-63d7450628e1.herokuapp.com/images/latest/timestamp');
        const data = await response.json();
        setTimestamp1(data.timestamp);
      } catch (error) {
        console.error('Failed to fetch initial timestamp:', error);
      }
    };

    // Function to fetch the final timestamp
    const fetchFinalTimestamp = async () => {
      try {
        const response = await fetch('https://vg02-63d7450628e1.herokuapp.com/images/latest/timestamp');
        const data = await response.json();
        setTimestamp2(data.timestamp);

        // Only show toast if timestamp2 is different from timestamp1
        if (timestamp1 && data.timestamp !== timestamp1) {
          toast.info('Activity Detected');
        }
      } catch (error) {
        console.error('Failed to fetch final timestamp:', error);
      }
    };

    fetchVehiclesData();
    fetchInitialTimestamp();
    
    // Set up a timeout to fetch the timestamp after 30 seconds
    const timeoutId = setTimeout(fetchFinalTimestamp, 30000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [timestamp1]); // Depend on timestamp1 to avoid running the final fetch before the initial one

  return (
    <div className="bg-white font-inter_t p-6 shadow-md rounded-lg mt-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Vehicles</h2>
      <div className="space-y-1">
        {vehicles.map(vehicle => (
          <VehicleData 
            key={vehicle.vehicleId}
            owner={vehicle.owner}
            brand={vehicle.makeAndModel}
            registrationNumber={vehicle.registrationNumber}
            vehicleID={vehicle.vehicleId}
            vehicleType={vehicle.vehicleType}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default CarDetails;

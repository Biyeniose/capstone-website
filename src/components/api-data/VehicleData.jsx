
// will take in props
function VehicleData({ owner, brand, registrationNumber, vehicleID, vehicleType }) {



    return (
        <div>
            <p><span className="font-medium">Owner:</span> {owner}</p>
            <p><span className="font-medium">Brand:</span> {brand}</p>
            <p><span className="font-medium">Registration Number:</span> {registrationNumber}</p>
            <p><span className="font-medium">Vehicle ID:</span> {vehicleID}</p>
            <p><span className="font-medium">Vehicle Type:</span> {vehicleType}</p>  
            <hr /> 
        </div>

                                      

    );
}

export default VehicleData;
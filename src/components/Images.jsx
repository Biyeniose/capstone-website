import React from 'react';

const Images = () => {

    const imageUrl = "https://vg02capstone.cyclic.app/images/65f4943e452607045662e92b";

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-2xl font-semibold mb-4 text-center">Latest Images</h2>
            <img src={imageUrl} alt="Dynamic from API" className="max-w-md w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
    );
}

export default Images;
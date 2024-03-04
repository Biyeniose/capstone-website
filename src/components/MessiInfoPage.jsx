import React from 'react';

function MessiInfoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://media.allure.com/photos/65a54664cd0b0410b6b2f501/12:9/w_2560%2Cc_limit/margot%2520robbie%2520critics%2520choice%25202024.jpg" // Replace with the actual image URL
          alt="A person resembling Lionel Messi"
          className="w-full h-80 object-cover object-center"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Lionel Messi</h2>
          <p className="text-gray-600">Age: 35</p>
          <p className="text-gray-600">Nationality: Argentine</p>
        </div>
      </div>
    </div>
  );
}

export default MessiInfoPage;

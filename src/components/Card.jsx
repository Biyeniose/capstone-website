import React from 'react';

function Card({ name, degree, linkedin }) {
  return (
    <div className="max-w-xs mx-auto my-4 bg-white px-4 py-6 shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-3">{name}</h1>
      <p className="text-lg">Degree: {degree}</p>
      <p className="text-lg">
        LinkedIn: <a href={linkedin} className="text-blue-500 hover:text-blue-700" target="_blank" 
                  rel="noopener noreferrer">{linkedin}</a>
      </p>
    </div>
  );
}

export default Card;

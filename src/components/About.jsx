import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-gray-800">About Us</h1>
                <p className="mt-4 text-gray-600">
                    Welcome to our website! We specialize in providing quality services and products. 
                    Our team is dedicated to ensuring customer satisfaction and delivering excellence in everything we do.
                </p>
                <p className="mt-2 text-gray-600">
                    Established in [Year], our company has grown to become a leader in our industry. 
                    We're proud of our achievements and are committed to continuous improvement and innovation.
                </p>
                <p className="mt-2 text-gray-600">
                    Thank you for visiting our site. We look forward to serving you and meeting your needs.
                </p>
            </div>
        </div>
    );
}

export default About;

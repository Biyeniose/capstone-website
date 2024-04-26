import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

const Images = () => {
    const latestImageUrl = "https://vg02-63d7450628e1.herokuapp.com/images/latest";
    const latestTimestampUrl = "https://vg02-63d7450628e1.herokuapp.com/images/latest/timestamp";
    const threeImagesUrl = "https://vg02-63d7450628e1.herokuapp.com/images/latest-three";
    
    // State for the latest timestamp and additional images
    const [latestTimestamp, setLatestTimestamp] = useState('');
    const [additionalImages, setAdditionalImages] = useState([]);

    // Function to fetch the latest timestamp
    const fetchLatestTimestamp = () => {
        fetch(latestTimestampUrl)
            .then(response => response.json())
            .then(data => {
                setLatestTimestamp(data.timestamp);
            })
            .catch(error => console.error('Error:', error));
    };

    // Function to fetch the three additional images
    const fetchAdditionalImages = () => {
        fetch(threeImagesUrl)
            .then(response => response.json())
            .then(data => {
                setAdditionalImages(data);
            })
            .catch(error => console.error('Error:', error));
    };

    // Polling for the latest timestamp
    useEffect(() => {
        fetchLatestTimestamp();
        const intervalId = setInterval(fetchLatestTimestamp, 1800); // Poll every 3 seconds
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    // Polling for the three additional images
    useEffect(() => {
        fetchAdditionalImages();
        const intervalId = setInterval(fetchAdditionalImages, 1800); // Poll every 3 seconds
        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <>
            <h2 className="text-2xl font-semibold my-8 text-center py-8">Latest Camera Images</h2>
            <div className="flex flex-wrap justify-center min-h-screen">
                {additionalImages.map((image) => (
                    <ImageCard
                        key={image.id} // Assuming each image has a unique ID
                        imageUrl={`https://vg02-63d7450628e1.herokuapp.com/images/${image.id}`}
                        imageName={`Updated: ${image.timestamp}`}
                    />
                ))}
            </div>
        </>
    );
};

export default Images;

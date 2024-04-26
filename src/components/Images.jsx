import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';


// The Images component for the latest image and the additional images
const Images = () => {
    const latestImageUrl = "https://vg02-63d7450628e1.herokuapp.com/images/latest";
    const latestTimestampUrl = "https://vg02-63d7450628e1.herokuapp.com/images/latest/timestamp";
    const threeImagesUrl = "https://vg02-63d7450628e1.herokuapp.com/images/latest-three";
    
    // State for the latest timestamp and additional images
    const [latestTimestamp, setLatestTimestamp] = useState('');
    const [additionalImages, setAdditionalImages] = useState([]);

    // Fetch the latest timestamp
    useEffect(() => {
        fetch(latestTimestampUrl)
            .then(response => response.json())
            .then(data => {
                setLatestTimestamp(data.timestamp);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    // Fetch the three additional images
    useEffect(() => {
        fetch(threeImagesUrl)
            .then(response => response.json())
            .then(data => {
                setAdditionalImages(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
      <>
      <h2 className="text-2xl font-semibold my-8 text-center py-8">Latest Camera Images</h2>
      <div className="flex flex-wrap justify-center min-h-screen">        
      
      {additionalImages.map((image) => (
          <ImageCard 
               imageUrl={`https://vg02-63d7450628e1.herokuapp.com/images/${image.id}`}
               imageName={`Updated: ${image.timestamp}`}                          
                />        
               ))}                   

                    
      </div>
      </>
        
    );
};

export default Images;
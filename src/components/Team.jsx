import React from 'react';
import Card from './Card';

const Team = () => {
    return (
        <div className="flex flex-wrap justify-center items-start max-w-screen-lg mx-auto">
            <Card 
                name="Mohib Khan" 
                degree="Comp Eng" 
                linkedin="https://linkedin.com/in/biyeniose-o-864450a7" 
            />
            <Card 
                name="BJ Onyeagwu" 
                degree="Comp Eng" 
                linkedin="https://linkedin.com/in/biyeniose-o-864450a7" 
            />
            <Card 
                name="Mario Ianniello" 
                degree="Software Eng" 
                linkedin="https://linkedin.com/in/biyeniose-o-864450a7" 
            />
            <Card 
                name="Thomas Pazhaidam" 
                degree="Comp Eng" 
                linkedin="https://linkedin.com/in/biyeniose-o-864450a7" 
            />

        </div>
    );
}

export default Team;
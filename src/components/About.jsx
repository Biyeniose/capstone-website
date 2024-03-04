import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-gray-800">About Us</h1>
                <p className="mt-4 text-gray-600">
                    Welcome to our website! Objective of this Project is to 
                    build an IoT vehicle tracking unit based on the latest ARM Cortex M4/M7 microcontroller and a modern GSM/GPRS module. 
                </p>
                <p className="mt-2 text-gray-600">
                This alarm system is used to protect vehicles. It contains a control part based on a stand-alone microcontroller and a motion detector unit
                </p>

                <p className="mt-2 text-gray-600">
                The alarm system communicates with a remote web server application where the vehicle status and 
                movement information may be viewed in an intuitive way on the map via the Internet.
                </p>
                <p className="mt-2 text-gray-600">
                

                The alarm system should include shock sensors, LCD interface with keypad for user interaction with the system, IR sensors for the motion detection, 
                ultra-sonic sensors for distance motion detection. The system gathers the GPS/GLONASS 
                information on geographic coordinates, time, date, speed, in-journey distance traveled, and sends this information over GPRS to the web server application

                <p className="mt-2 text-gray-600">
                The web application shows the current location and status information of the vehicle on open street maps. 
                The same information is displayed locally on the graphical LCD display.
                </p>
                
                </p>
            </div>
        </div>
    );
}

export default About;

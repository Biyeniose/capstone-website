import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center p-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-sm">
                    © {new Date().getFullYear()} VG02 Car Security System.
                </div>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">Terms of Use</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">Contact</a>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xs">
                        Toronto Metropolitan University Capstone 2024.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

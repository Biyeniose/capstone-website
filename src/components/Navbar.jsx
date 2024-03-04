import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* Website Logo */}
                            <a href="/" className="flex items-center py-4 px-2 no-underline">
                                <span className="font-semibold text-xl">Car Security System</span>
                            </a>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="/" className="py-4 px-2 text-gray-300 no-underline
                            hover:text-green-400 ">
                                Home</a>
                            <a href="/about" className="py-4 px-2 text-gray-300 no-underline
                            hover:text-green-400 ">
                                About</a>
                            <a href="/demo" className="py-4 px-2 text-gray-300 no-underline
                            hover:text-green-400 ">
                                Demo</a>
                            <a href="/team" className="py-4 px-2 text-gray-300 no-underline
                            hover:text-green-400 ">
                                Team</a>
                        </div>
                    </div>
                    {/* Secondary Navbar items */}
                    <div className="hidden md:flex items-center space-x-3 ">
                        <a href="/" className="py-2 px-2 font-medium text-gray-300 no-underline
                        hover:text-green-400 transition duration-300">Login</a>
                        <a href="/" className="py-2 px-2 font-medium text-white bg-green-500 no-underline
                        hover:bg-green-400 rounded transition duration-300">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

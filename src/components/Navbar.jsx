import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 font-inter text-white shadow-lg">
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
              <a href="/" className="py-4 font-bold px-2 text-gray-300 no-underline hover:text-green-400">
                Home
              </a>
              <a href="/about" className="py-4 font-bold px-2 text-gray-300 no-underline hover:text-green-400">
                About
              </a>
              <a href="/demo" className="py-4 font-bold px-2 text-gray-300 no-underline hover:text-green-400">
                Demo
              </a>
              <a href="/team" className="py-4 font-bold px-2 text-gray-300 no-underline hover:text-green-400">
                Team
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col px-2 pb-4 space-y-1 sm:px-3`}>
        <a href="/" className="text-gray-300 font-bold no-underline hover:text-green-400 py-2 rounded">
          Home
        </a>
        <a href="/about" className="text-gray-300 font-bold no-underline hover:text-green-400 py-2 rounded">
          About
        </a>
        <a href="/demo" className="text-gray-300 font-bold no-underline hover:text-green-400 py-2 rounded">
          Demo
        </a>
        <a href="/team" className="text-gray-300 font-bold no-underline hover:text-green-400 py-2 rounded">
          Team
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

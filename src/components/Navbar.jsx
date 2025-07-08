import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full bg-indigo-950 h-24 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
       
        <h1 className="text-3xl font-serif font-extrabold text-white">
          Construction<span className="text-orange-600">.</span>
        </h1>

        
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-orange-600 font-bold hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-bold hover:text-orange-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white font-bold hover:text-orange-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/footer" className="text-white font-bold hover:text-orange-400">
              Contact
            </Link>
          </li>
        </ul>

        
        <button className="bg-blue-950 border border-orange-600 text-white font-bold px-4 py-2 rounded-3xl hover:bg-orange-600 transition duration-300">
          Started Now!
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

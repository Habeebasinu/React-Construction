import React from 'react';
import WORK from '../assets/work3.jpeg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const Navigate = useNavigate();

  const ClickFunction = () => {
    Navigate('/footer');
  };

  return (
    <div
      className="h-screen bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${WORK})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div> 
      
      <div className="relative z-10 pt-32 md:pt-48 px-4 md:px-16 max-w-7xl mx-auto">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-sans mb-2">
          Best <span className="text-orange-600">Partner</span>
        </p>

        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-sans mb-2">
          For Your <span className="text-orange-600">Next</span>
        </p>

        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-sans mb-4">
          Construction<span className="text-orange-600">.</span>
        </p>

        <p className="text-white text-sm sm:text-base md:text-lg max-w-xl mb-6">
          Contrary to popular belief, construction has roots in classic design and engineering.
        </p>

        <button
          onClick={ClickFunction}
          className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:from-orange-500 hover:to-yellow-500 transition duration-300"
        >
          Contact Today
        </button>
      </div>
    </div>
  );
}

export default Home;

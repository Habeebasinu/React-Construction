import React from 'react';
import { FaTools, FaBuilding, FaPencilRuler, FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Services() {
  return (
    <div className="bg-amber-100 w-full py-16 px-4 sm:px-8">
      <p className="text-sm font-extrabold text-blue-950 text-center">//<span className="text-orange-600">// Services //</span>//</p>
      <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-center">What We Do?</h1>
      <p className="text-2xl font-extrabold text-center text-orange-600">-<span className="text-blue-950">.</span>-</p>

      
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        
        <div className="bg-white w-full max-w-xs h-[360px] rounded-xl flex flex-col items-center p-6 shadow-md">
          <FaTools className="text-orange-500 text-4xl mb-4 bg-amber-100 rounded-2xl p-4 w-[70px] h-[70px]" />
          <h2 className="text-lg font-bold">Machinery Setup</h2>
          <p className="text-gray-600 text-sm mt-4 text-center">
            We provide end-to-end setup for factory equipment and heavy machinery installations.
          </p>
          <button className="text-md font-bold mt-4 text-orange-600 hover:underline">View Details</button>
        </div>

       
        <div className="bg-white w-full max-w-xs h-[360px] rounded-xl flex flex-col items-center p-6 shadow-md">
          <FaBuilding className="text-orange-500 text-4xl mb-4 bg-amber-100 rounded-2xl p-4 w-[70px] h-[70px]" />
          <h2 className="text-lg font-bold">Industrial Building</h2>
          <p className="text-gray-600 text-sm mt-4 text-center">
            From design to construction, we handle industrial and commercial building projects.
          </p>
          <button className="text-md font-bold mt-4 text-orange-600 hover:underline">View Details</button>
        </div>

       
        <div className="bg-white w-full max-w-xs h-[360px] rounded-xl flex flex-col items-center p-6 shadow-md">
          <FaPencilRuler className="text-orange-500 text-4xl mb-4 bg-amber-100 rounded-2xl p-4 w-[70px] h-[70px]" />
          <h2 className="text-lg font-bold">Architect Planning</h2>
          <p className="text-gray-600 text-sm mt-4 text-center">
            Our experienced architects craft detailed layouts and structural plans customized for you.
          </p>
          <button className="text-md font-bold mt-4 text-orange-600 hover:underline">View Details</button>
        </div>
      </div>

    
      <div className="flex justify-center gap-4 mt-12">
        <FaArrowAltCircleLeft className="text-4xl text-orange-600 cursor-pointer" />
        <FaArrowAltCircleRight className="text-4xl text-orange-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default Services;

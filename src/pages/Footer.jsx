import React from 'react';
import {
  FaAddressCard,
  FaHandHoldingUsd,
  FaCalendarAlt,
  FaLongArrowAltRight,
} from 'react-icons/fa';
import CAP from '../assets/cap3.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const getAppoinment = () => {
    navigate('/appoinment');
  };

  return (
    <div className="bg-indigo-950 w-full min-h-screen relative py-20 px-6">
    
      <img src={CAP} alt="Helmet Cap" className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 w-52 sm:w-72" />

      
      <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-center text-white z-20 relative">
        How To Start Works
      </h1>
      <p className="text-3xl font-extrabold font-sans text-white text-center">
        _<span className="text-orange-600">.</span>_
      </p>

     
      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8 relative z-20">
       
        <div className="w-full max-w-sm py-6 px-6 bg-blue-950 h-[320px] rounded-xl flex flex-col items-center justify-center shadow-lg">
          <FaAddressCard className="text-white text-4xl mb-4 rounded-2xl border border-orange-600 w-[70px] h-[70px] p-4" />
          <p className="text-md font-bold text-white">Send Us</p>
          <p className="text-md font-bold text-white">Requirements</p>
          <button className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl px-6 py-2 text-white font-semibold shadow-md hover:from-orange-600 hover:to-yellow-600 transition duration-300">
            Step-01
          </button>
        </div>

        
        <FaLongArrowAltRight className="text-4xl text-orange-600 hidden lg:block" />

        
        <div className="w-full max-w-sm py-6 px-6 bg-blue-950 h-[320px] rounded-xl flex flex-col items-center justify-center shadow-lg">
          <FaCalendarAlt className="text-white text-4xl mb-4 rounded-2xl border border-orange-600 w-[70px] h-[70px] p-4" />
          <p className="text-md font-bold text-white">Book An</p>
          <p className="text-md font-bold text-white">Appointment</p>
          <button
            onClick={getAppoinment}
            className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl px-6 py-2 text-white font-semibold shadow-md hover:from-orange-600 hover:to-yellow-600 transition duration-300"
          >
            Step-02
          </button>
        </div>

        
        <FaLongArrowAltRight className="text-4xl text-orange-600 hidden lg:block" />

        
        <div className="w-full max-w-sm py-6 px-6 bg-blue-950 h-[320px] rounded-xl flex flex-col items-center justify-center shadow-lg">
          <FaHandHoldingUsd className="text-white text-4xl mb-4 rounded-xl border border-orange-600 w-[70px] h-[70px] p-4" />
          <p className="text-md font-bold text-white">Start Your</p>
          <p className="text-md font-bold text-white">Project</p>
          <button className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl px-6 py-2 text-white font-semibold shadow-md hover:from-orange-600 hover:to-yellow-600 transition duration-300">
            Step-03
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import { FaFacebookF, FaApple, FaSnapchat } from 'react-icons/fa';


const OurCompany = () => {
  return (
    <div className="w-full flex flex-col px-6 bg-secondary md:flex-row justify-between items-center gap-8">
      {/* First Column with Icons */}

      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <p
          className="font-semibold text-xl text-base leading-[38.4px]"
          style={{ width: '344px' }}
        >
          Our company is a top-rated service provider
        </p>
      </div>
      {/* Second Column with Text */}
      <div className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center md:justify-end gap-8">
        <a href="#" className="flex items-center justify-center text-base">
          <FaApple className="text-base text-4xl" />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-base p-3"
        >
          <FaFacebookF className="text-secondary text-3xl" />
        </a>
    
        <a href="#" className="flex items-center justify-center text-base">
          <FaSnapchat className="text-base text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default OurCompany;

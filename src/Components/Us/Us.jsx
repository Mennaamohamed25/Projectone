import React from 'react';
import { Link } from 'react-router-dom';

const Us = () => {
  return (
    <div className="w-full flex flex-col px-6 bg-secondary md:flex-row justify-between items-center gap-8 p-[80px_112px]">
      {/* First Column with Icons */}
      <div className="w-full px-8 md:w-1/2 p-4 text-center md:text-left">
        <p
          className="font-semibold text-xl text-base leading-[38.4px] md:items-center md:text-left"
          style={{ width: '344px' }}
        >
          Ready to transform your home?
        </p>
      </div>
      {/* Second Column with Text */}
      <Link to="/contact/*" className="px-8">
        <button className="bg-base text-secondary rounded-[8px] px-[24px] py-[24px] gap-[8px] text-[16px]">
          Get started with us
        </button>
      </Link>
    </div>
  );
};

export default Us;

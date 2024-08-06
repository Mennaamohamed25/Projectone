import React from 'react';
import { Link } from 'react-router-dom';

const Us = () => {
  return (
    <div className="w-full  h-auto bg-secondary">
      <div className="mx-auto max-w-7xl px-8 p-4 text-center md:text-left flex flex-col  md:flex-row md:px-8 justify-between items-center gap-4 md:gap-8">
        {/* First Column with Text */}
        <div className="">
          <p className="font-semibold text-base text-lg md:text-xl leading-relaxed md:leading-[38.4px]">
            Ready to transform your home?
          </p>
        </div>
        {/* Second Column with Icons */}
        <div className="w-full md:w-[calc(100%-344px)] p-4 text-center md:text-left flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <Link to="/contact/*" className="px-8">
            <button className="bg-base text-secondary rounded-[8px] px-[24px] py-[24px] gap-[8px] text-[16px]">
              Get started with us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Us;

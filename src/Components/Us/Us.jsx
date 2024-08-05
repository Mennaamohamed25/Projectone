import React from 'react';

const Us = () => {
  return (
    <div className="w-full flex flex-col px-6 bg-secondary md:flex-row justify-between items-center gap-8 p-[80px_112px]">
      {/* First Column with Icons */}
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <p
          className="font-semibold text-xl text-base leading-[38.4px] md:items-center md:text-left"
          style={{ width: '344px' }}
        >
          Ready to transform your home?
        </p>
      </div>
      {/* Second Column with Text */}
      <div>
        <button className="bg-base text-secondary rounded-[8px] px-[24px] py-[24px] gap-[8px] text-[16px]">
          Get started with us
        </button>
      </div>
    </div>
  );
};

export default Us;

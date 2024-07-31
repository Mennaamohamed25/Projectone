import React from 'react';
import headerImage from '../../images/header.png'

const Header = () => {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      {/* <div className="flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-white font-semibold text-[64px] leading-[96px] mb-6">
          About Company
        </h1>
        <p className="text-white text-lg mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <button className="bg-blue-500 text-white rounded-[8px] py-[16px] px-[24px] gap-[8px]">
          Contact Us
        </button>
      </div> */}
    </header>
  );
}

export default Header

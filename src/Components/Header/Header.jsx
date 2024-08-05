import React from 'react';
import headerImage from '../../images/bgheader.png';
import avatarOne from '../../images/avatar1.png';
import avatarTwo from '../../images/avatar2.png';
import avatarThree from '../../images/avatar3.png';
import avatarFour from '../../images/avatar4.png';
import { StarIcon } from '@heroicons/react/20/solid'; // Import Heroicons for star icons

const Header = () => {
  return (
    <header
      className="relative w-full h-[800px] bg-cover bg-center px-[116px] py-0 
             md:px-8 sm:px-4 xs:px-2 
             md:max-w-[calc(100%-40px)] lg:max-w-[calc(100%-40px)] 
             max-w-full 
             xs:overflow-y-hidden sm:overflow-y-hidden"
      style={{
        backgroundImage: `url(${headerImage})`,
        borderRadius: '16px',
        boxSizing: 'border-box',
        margin: '0 auto',
      }}
    >
      <div className="flex flex-col justify-center items-start h-full text-start px-4 sm:px-2 md:w-[776px] lg:w-[776px]">
        <p
          className="text-white font-semibold mb-6 
              md:text-[64px] md:leading-[72px] 
              sm:text-[46px] sm:leading-[48px] 
              xsmall:text-[29px] xs:leading-[0px]"
        >
          About Company
        </p>
        <p className="text-textspan text-lg mb-8  xs:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <button className="bg-main text-white rounded-[8px] py-[16px] px-[24px] gap-[8px] text-sm md:py-3 md:px-6 sm:py-2 sm:px-4 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out">
          Contact Us
        </button>

        <div className="relative flex items-center mt-12">
          <div className="relative flex space-x-[-15px] md:space-x-[-10px] sm:space-x-[-5px] xs:space-x-[-3px]">
            <img
              src={avatarOne}
              alt="avatar"
              className="w-12 h-12 rounded-full"
              style={{ zIndex: 4 }}
            />
            <img
              src={avatarTwo}
              alt="avatar"
              className="w-12 h-12 rounded-full"
              style={{ zIndex: 3 }}
            />
            <img
              src={avatarThree}
              alt="avatar"
              className="w-12 h-12 rounded-full"
              style={{ zIndex: 2 }}
            />
            <img
              src={avatarFour}
              alt="avatar"
              className="w-12 h-12 rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="text-white items-center space-x-2 ml-4 text-sm md:text-base xs:text-xs">
            <div>Trusted by 1M+ customers</div>
            <div className="flex space-x-1">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <div>
                4.2/5 <span className="text-textspan">(45k reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

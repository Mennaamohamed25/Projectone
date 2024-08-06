import React from 'react';
import headerImage from '../../images/bgheader.png';
import avatarOne from '../../images/avatar1.png';
import avatarTwo from '../../images/avatar2.png';
import avatarThree from '../../images/avatar3.png';
import avatarFour from '../../images/avatar4.png';
import { StarIcon } from '@heroicons/react/20/solid'; // Import Heroicons for star icons
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      className="relative mx-auto max-w-7xl px-8 h-[600px] sm:h-[500px] xs:h-[400px] bg-cover bg-center py-0 
 "
      style={{
        backgroundImage: `url(${headerImage})`,
        borderRadius: '16px',
        boxSizing: 'border-box',
        margin: '0 auto',
      }}
    >
      <div className="flex flex-col justify-center items-start h-full text-start px-4 xs:w-full sm:px-2 sm:w-full md:w-[778px]">
        <p
          className="
    text-white font-semibold mb-4 
    text-[46px] leading-[48px]               
    xs:text-[36px] xs:leading-[36px]     
    sm:text-[46px] sm:leading-[48px]      
    md:text-[64px] md:leading-[72px]         
  "
        >
          About Company
        </p>
        <p className="text-textspan text-lg mb-4 xs:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <Link to="/contact/*">
          <button className="bg-main text-white rounded-[8px] py-[12px] px-[16px] gap-[8px] text-sm md:py-3 md:px-6 sm:py-2 sm:px-4 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>

        <div className="relative flex flex-col sm:flex-row  mt-6">
          <div className="relative flex space-x-[-10px] sm:space-x-[-5px] xs:space-x-[-3px]">
            <img
              src={avatarOne}
              alt="avatar"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              style={{ zIndex: 4 }}
            />
            <img
              src={avatarTwo}
              alt="avatar"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              style={{ zIndex: 3 }}
            />
            <img
              src={avatarThree}
              alt="avatar"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              style={{ zIndex: 2 }}
            />
            <img
              src={avatarFour}
              alt="avatar"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="text-white items-center space-x-2 md:ml-4 text-sm md:text-base xs:text-xs mt-4 sm:mt-0">
            <div>Trusted by 1M+ customers</div>
            <div className="flex space-x-1">
              <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
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

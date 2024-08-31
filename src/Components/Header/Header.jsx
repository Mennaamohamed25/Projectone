import React, { useState, useEffect } from 'react';
import headerImage1 from '../../images/header.png';
import headerImage2 from '../../images/header2.png';
import headerImage3 from '../../images/header3.png';
import avatarOne from '../../images/avatar1.png';
import avatarTwo from '../../images/avatar2.png';
import avatarThree from '../../images/avatar3.png';
import avatarFour from '../../images/avatar4.png';
import { StarIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [headerImage1, headerImage2, headerImage3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <header
      className="relative w-[98%] mx-auto h-[600px] xl:h-[540px] sm:h-[500px] xs:h-[400px] bg-cover bg-center"
      style={{ borderRadius: '16px', boxSizing: 'border-box' }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
          }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl relative z-10 h-full flex justify-start">
        <div className="flex flex-col justify-center items-start h-full text-start xs:w-full sm:px-2 sm:w-full md:w-[778px]">
          <p
            className="
              text-white font-semibold mb-4 
              text-[30px] leading-[30px]               /* Base for xsmall screens */
              sm:text-[24px] sm:leading-[28px]         /* Small screens */
              md:text-[46px] md:leading-[48px]         /* Medium screens */
              lg:text-[64px] lg:leading-[72px]         /* Large screens */
            "
          >
            Innovative Solutions for Every Industry
          </p>
          <p className="text-textspan text-lg mb-4 xs:text-sm">
            Driving Growth and Excellence Across Sectors with Tailored Expertise
            and Cutting-Edge Technology.
          </p>

          <Link to="/contact/*">
            <button className="bg-main text-white rounded-[8px] py-[12px] px-[16px] gap-[8px] text-sm md:py-3 md:px-6 sm:py-2 sm:px-4 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>

          <div className="relative flex flex-col sm:flex-row mt-6">
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
            <div className="text-white items-center md:ml-4 text-sm md:text-base xs:text-xs mt-4 sm:mt-0">
              <div>Trusted by 1M+ customers</div>
              <div className="flex  space-x-1 ">
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
      </div>
      {/* Dots for the slider */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-7 h-1 rounded ${
              currentSlide === index ? 'bg-main' : 'bg-base'
            }`}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;

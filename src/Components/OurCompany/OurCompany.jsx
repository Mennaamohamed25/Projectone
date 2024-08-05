import React from 'react';
import appleImg from '../../images/apple.png';
import facebookImg from '../../images/facebook.png';
import slackImg from '../../images/slack.png';
import snapImg from '../../images/snap.png';
import { Link } from 'react-router-dom';

const OurCompany = () => {
  return (
    <div className="w-full h-auto flex flex-col px-4 bg-secondary md:flex-row md:px-6 justify-between items-center gap-4 md:gap-8">
      {/* First Column with Text */}
      <div className="w-full md:w-[344px] p-4 text-center md:text-left">
        <p className="font-semibold text-base text-lg md:text-xl leading-relaxed md:leading-[38.4px]">
          Our company is a top-rated service provider
        </p>
      </div>
      {/* Second Column with Icons */}
      <div className="w-full md:w-[calc(100%-344px)] p-4 text-center md:text-left flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
        <Link to="#" className="flex items-center justify-center p-2">
          <img src={appleImg} alt="apple" className="w-8 h-8 md:w-12 md:h-12" />
        </Link>
        <Link to="#" className="flex items-center justify-center p-2">
          <img
            src={facebookImg}
            alt="facebook"
            className="w-8 h-8 md:w-12 md:h-12"
          />
        </Link>
        <Link to="#" className="flex items-center justify-center p-2">
          <img src={slackImg} alt="slack" className="w-8 h-8 md:w-12 md:h-12" />
        </Link>
        <Link to="#" className="flex items-center justify-center p-2">
          <img
            src={snapImg}
            alt="snapchat"
            className="w-8 h-8 md:w-12 md:h-12"
          />
        </Link>
      </div>
    </div>
  );
};

export default OurCompany;

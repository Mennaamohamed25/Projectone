import React from 'react';
import '../../index.css';
import logoImage from '../../images/logodark.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="w-full bg-bg text-white flex flex-col justify-center items-center p-6">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Logo and Text Container */}
        <div className="text-center mb-8">
          <img src={logoImage} alt="Logo" className="mx-auto mb-4" />
          <p className="text-[16px] leading-[25.6px] tracking-[0.2px] max-w-[458px] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Row with Two Columns */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
          {/* First Column with Envelope Icon */}
          <div className="w-full md:w-1/2 p-4 text-center md:text-left flex items-center">
            <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3 mr-4">
              <EnvelopeIcon className="h-6 w-6 text-white" />
            </div>
            <div className="items-start">
              <p className="text-lg text-textspan font-semibold mb-1">
                Contact us at
              </p>
              <p className="text-sm">info@endlessbuilding.com</p>
            </div>
          </div>

          {/* Second Column with Phone Icon */}
          <div className="w-full md:w-1/2 p-4 text-center md:text-left flex items-center">
            <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3 mr-4">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg text-textspan font-semibold mb-1">
                Whatsapp
              </p>
              <p className="text-sm">+962791759617</p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-8 w-full border-gray-600" />

      {/* Links Centered */}
      <div className="w-full text-center mb-8">
        <a
          href="#"
          className="text-white mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-white mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Careers
        </a>
      </div>

      {/* Row with Two Columns */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        {/* First Column with Icons */}
       
        <div className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center md:justify-start gap-8">
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-base p-3 "
          >
            <FaFacebookF className="text-secondary text-xl " />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-base p-3"
          >
            <FaInstagram className="text-secondary text-xl" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-base p-3"
          >
            <FaLinkedinIn className="text-secondary text-xl" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-base p-3"
          >
            <FaTwitter className="text-secondary text-xl" />
          </a>
        </div>

        {/* Second Column with Text */}
        <div className="w-full md:w-1/2 p-4 text-center md:text-right">
          <p className="text-sm text-textspan">
            endless building© 2024, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

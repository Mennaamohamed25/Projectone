import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../../index.css';
import logoImage from '../../images/logodark.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'; // Import social media icons
import { Link } from 'react-router-dom';

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      className="w-full bg-bg text-white flex flex-col justify-center items-center p-6 overflow-x-hidden"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo and Text Container */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src={logoImage} alt="Logo" className="mx-auto mb-4" />
          <p className="text-[16px] leading-[25.6px] tracking-[0.2px] max-w-[458px] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </motion.div>

        {/* Row with Two Columns */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
          {/* First Column with Envelope Icon */}
          <motion.div
            className="w-full md:w-1/2 p-4 text-center md:text-left flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3 mr-4">
              <EnvelopeIcon className="h-6 w-6 text-white" />
            </div>
            <div className="items-start">
              <p className="text-lg text-textspan text-start font-semibold mb-1">
                Contact us at
              </p>
              <p className="text-sm">info@endlessbuilding.com</p>
            </div>
          </motion.div>

          {/* Second Column with Phone Icon */}
          <motion.div
            className="w-full md:w-1/2 p-4 text-center md:text-left flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3 mr-4">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg text-textspan font-semibold mb-1">
                Whatsapp
              </p>
              <p className="text-sm">+962791759617</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Line */}
      <motion.hr
        className="my-8 w-full border-gray-600 mx-auto max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />

      {/* Links Centered */}
      <motion.div
        className="w-full text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Home
        </Link>
        <Link
          to="/construction/*"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Construction
        </Link>
        <Link
          to="/gas/*"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Oil & Gas
        </Link>
        <Link
          to="/industrial/*"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Industrial
        </Link>
        <Link
          to="/investments/*"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Investments
        </Link>
        <Link
          to="/healthcare/*"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Healthcare
        </Link>
        <Link
          to="/consumer/*"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Consumer & Real Estate
        </Link>
        <Link
          to="/technology/*"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Information Technology
        </Link>
        <Link
          to="/food/*"
          className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
        >
          Food and Beverage
        </Link>
      </motion.div>

      {/* Row with Two Columns */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        {/* First Column with Icons */}

        <motion.div
          className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center md:justify-start gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="#"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base p-3 "
          >
            <FaFacebookF className="text-secondary text-xl " />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base p-3"
          >
            <FaInstagram className="text-secondary text-xl" />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base p-3"
          >
            <FaLinkedinIn className="text-secondary text-xl" />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base p-3"
          >
            <FaTwitter className="text-secondary text-xl" />
          </Link>
        </motion.div>

        {/* Second Column with Text */}
        <motion.div
          className="w-full md:w-1/2 p-4 text-center md:text-right"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-sm text-textspan">
            endless building© 2024, All rights reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

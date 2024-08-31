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
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      className="w-full bg-bg text-white flex flex-col justify-center items-center p-6 overflow-x-hidden"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <img src={logoImage} alt="Logo" className="mx-auto mb-4" />
          <p className="text-[16px] leading-[25.6px] tracking-[0.2px] max-w-[458px] mx-auto">
            Driving Growth and Excellence Across Sectors with Tailored Expertise
            and Cutting-Edge Technology.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
          <div className="w-full md:w-1/2 p-4 text-center md:text-left flex items-center">
            <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3 mr-4">
              <EnvelopeIcon className="h-6 w-6 text-white" />
            </div>
            <div className="items-start">
              <p className="text-lg text-textspan text-start font-semibold mb-1">
                Contact us at
              </p>
              <p className="text-sm">info@endlessbuilding.org</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 text-center md:text-left flex items-center">
            <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3 mr-4">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg text-textspan font-semibold mb-1">
                Whatsapp
              </p>
              <p className="text-sm">009647855999989</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 w-full border-gray-600 mx-auto max-w-7xl" />

      <div className="w-full text-center mb-8">
        {[
          'Home',
          'Construction',
          'Oil & Gas',
          'Industrial',
          'Investments',
          'Healthcare',
          'Consumer & Real Estate',
          'Information Technology',
          'Food and Beverage',
        ].map((link, index) => (
          <Link
            key={index}
            to={`/${link.toLowerCase().replace(/ & /g, '').replace(/ /g, '-')}`}
            className="text-white mx-2 sm:mx-4 transition-colors duration-300 ease-in-out hover:text-secondary"
          >
            {link}
          </Link>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center md:justify-start gap-4 sm:gap-8">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
            (Icon, index) => (
              <Link
                key={index}
                to="#"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base p-3"
              >
                <Icon className="text-secondary text-xl" />
              </Link>
            )
          )}
        </div>

        <div className="w-full md:w-1/2 p-4 text-center md:text-right">
          <p className="text-sm text-textspan">
            endless building© 2024, All rights reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

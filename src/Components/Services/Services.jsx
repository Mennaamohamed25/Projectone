import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { motion, useInView } from 'framer-motion'; // Ensure this import is correct
import { Link } from 'react-router-dom';
import Img1 from '../../images/imgserv1.png';
import Img2 from '../../images/imgserv2.png';
import Img3 from '../../images/imgserv3.png';
import Img4 from '../../images/imgserv4.png';
import Img5 from '../../images/imgserv5.png';
import Img6 from '../../images/imgserv6.png';
import Img7 from '../../images/imgserv7.png';
import Img8 from '../../images/imgserv8.png';


const Services = () => {
  const columns = [
    {
      id: 1,
      title: 'Construction',
      text: 'Innovative Construction Solutions for Modern Projects.',
      link: '/construction/*',
      image: Img1,
    },
    {
      id: 2,
      title: 'Oil & Gas',
      text: 'Streamlining Operations in the Oil & Gas Industry.',
      link: '/gas/*',
      image: Img2,
    },
    {
      id: 3,
      title: 'Industrial',
      text: 'Advanced Industrial Solutions for a Competitive Edge.',
      link: '/industrial/*',
      image: Img3,
    },
    {
      id: 4,
      title: 'Investments',
      text: 'Strategic Investment Services for Sustainable Growth.',
      link: '/investments/*',
      image: Img4,
    },
    {
      id: 5,
      title: 'Healthcare',
      text: 'Cutting-Edge Healthcare Solutions for Better Patient Care.',
      link: '/healthcare/*',
      image: Img5,
    },
    {
      id: 6,
      title: 'Consumer & Real Estate',
      text: 'Comprehensive Real Estate Services for Smart Investments.',
      link: '/consumer/*',
      image: Img6,
    },
    {
      id: 7,
      title: 'Information Technology',
      text: 'Empowering Businesses with Cutting-Edge IT Solutions.',
      link: '/technology/',
      image: Img7,
    },
    {
      id: 8,
      title: 'Food and Beverage',
      text: 'Optimizing Food & Beverage Operations for Quality and Safety.',
      link: '/food/*',
      image: Img8,
    },
  ];

  // Use ref and inView state from useInView
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl py-4 bg-base" ref={ref}>
      <div className="my-4">
        <p className="text-primary text-[24px] font-extrabold pb-3">
          PRODUCTS & SERVICES
        </p>
        <p className="text-primary text-[48px] font-medium leading-custom-large md:text-[36px] sm:text-[30px] xsmall:text-[25px] md:w-[469.33px] lg:w-[469.33px] w-auto">
          The services we have prepared for you
        </p>
      </div>
      {/* Container for the columns */}
      {inView && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
          {columns.map((column, index) => (
            <motion.div
              key={column.id}
              className="bg-dropdown rounded-lg p-6 flex flex-col "
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={column.image} alt='IMAGES'/>
              <div className="flex justify-between items-center mt-4">
                <h3 className="font-bold text-[15px] leading-[34px] text-primary truncate text-base ">
                  {column.title}
                </h3>
                <Link
                  to={column.link}
                  className="bg-base w-[33px] h-[33px] rounded-full p-[10px] flex items-center justify-center"
                >
                  <ArrowUpRightIcon
                    className="h-4 w-4 text-primary"
                    style={{ strokeWidth: '2px' }}
                  />
                </Link>
              </div>
              <p className="text-primary text-sm mt-4">{column.text}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;

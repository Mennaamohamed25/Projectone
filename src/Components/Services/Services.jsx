import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { motion, useInView } from 'framer-motion'; // Ensure this import is correct
import { Link } from 'react-router-dom';

const Services = () => {
  const columns = [
    {
      id: 1,
      title: 'Construction',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      link: '/construction/*',
    },
    {
      id: 2,
      title: 'Oil & Gas',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      link: '/gas/*',
    },
    {
      id: 3,
      title: 'Industrial',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      link: '/industrial/*',
    },
    {
      id: 4,
      title: 'Investments',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      link: '/investments/*',
    },
    {
      id: 5,
      title: 'Healthcare',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      link: '/healthcare/*',
    },
    {
      id: 6,
      title: 'Consumer & Real Estate',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      link: '/consumer/*',
    },
    {
      id: 7,
      title: 'Information Technology',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      link: '/technology/',
    },
    {
      id: 8,
      title: 'Food and Beverage',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
      link: '/food/*',
    },
  ];

  // Use ref and inView state from useInView
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="mx-auto max-w-7xl px-8 py-4 bg-base" ref={ref}>
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
              className="bg-dropdown rounded-lg p-6 flex flex-col h-[238px]"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[17px] leading-[34px] text-primary truncate text-base ">
                  {column.title}
                </h3>
                <Link
                  to={column.link}
                  className="bg-base w-[40px] h-[40px] rounded-full p-[12px] flex items-center justify-center"
                >
                  <ArrowUpRightIcon
                    className="h-4 w-4 text-primary"
                    style={{ strokeWidth: '2px' }}
                  />
                </Link>
              </div>
              <p className="text-primary text-sm mt-6">{column.text}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;

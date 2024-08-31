import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import imgOne from '../../../images/f1.png';
import imgTwo from '../../../images/f2.png';
import imgThree from '../../../images/f3.png';
import imgFour from '../../../images/Containerff.png';
import imgFive from '../../../images/Containerff (1).png';
import imgSix from '../../../images/Containerff (2).png';
import imgSeven from '../../../images/Containerff (3).png';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    text: 'Product Development & Innovation',
    desc: 'We collaborate with chefs, food scientists, and market analysts to develop innovative food and beverage products that meet consumer demands and set new trends.',
    img: imgFour,
  },
  {
    id: 2,
    text: 'Supply Chain Management',
    desc: 'Our services ensure that every step of the food and beverage supply chain is optimized for efficiency, sustainability, and cost-effectiveness, from sourcing ingredients to distribution.',
    img: imgFive,
  },
  {
    id: 3,
    text: 'Restaurant & Hospitality Consulting',
    desc: 'We provide expert consulting services to restaurants and hospitality businesses, helping them enhance their offerings, streamline operations, and create unforgettable dining experiences.',
    img: imgSix,
  },
  {
    id: 4,
    text: 'Quality Control & Compliance',
    desc: 'We offer comprehensive quality control services to ensure that food and beverage products meet the highest standards of safety, taste, and regulatory compliance, safeguarding both consumers and brands.',
    img: imgSeven,
  },
];

const Food = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col gap-6 md:flex-row md:gap-8"
      >
        {/* First Column: Text + Image */}
        <div
          className="flex flex-col space-y-4 mt-8 md:mt-8"
          style={{ flexBasis: '40%' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl text-secondary font-semibold mb-4 leading-hero">
              Food and Beverage
            </h2>
            <p
              className="text-textspan mb-4"
              style={{ fontSize: '14px', lineHeight: '1.5rem' }}
            >
              At Endless Food & Beverage, we understand that every meal is more
              than just sustenance—it’s an experience. With decades of expertise
              and a commitment to quality, we specialize in providing
              comprehensive food and beverage solutions that meet the highest
              standards of taste, safety, and sustainability, creating memorable
              dining experiences.
            </p>
            <Link to="/contact/*">
              <button className="mb-4 rounded-lg px-6 py-4 gap-2 bg-secondary text-base">
                Contact Us
              </button>
            </Link>
          </motion.div>
          <motion.img
            src={imgOne}
            alt="Description 1"
            className="w-full h-48 object-cover md:h-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Second Column: Image */}
        <motion.div
          className="flex-1 flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src={imgTwo}
            alt="Description 2"
            className="w-full h-48 object-cover md:h-auto"
          />
        </motion.div>

        {/* Third Column: Image */}
        <motion.div
          className="flex-1 flex flex-col items-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img
            src={imgThree}
            alt="Description 3"
            className="w-full h-48 object-cover md:h-auto"
          />
          <p className="mt-4 mb-10 text-gray-700 mr-auto">
            Transforming Visions into Reality.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="font-extrabold text-2xl leading-9">Our Services</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 mt-4 mb-4">
          {data.map(({ id, text, desc, img }) => (
            <motion.div
              key={id}
              className="flex flex-col flex-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.7 + id * 0.2 }} // Staggered animation
            >
              <div className="bg-dropdown p-6 rounded-t-lg h-full">
                <p className="mb-2">{text}</p>
                <p className="text-textspan text-sm">{desc}</p>
              </div>
              <img
                src={img}
                alt={`Description ${id}`}
                className="w-full h-auto object-cover rounded-b-lg flex-grow"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Food;

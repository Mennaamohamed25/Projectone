import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import imgOne from '../../../images/h1.png';
import imgTwo from '../../../images/h2.png';
import imgThree from '../../../images/h3.png';
import imgFour from '../../../images/Containerh.png';
import imgFive from '../../../images/Containerh (1).png';
import imgSix from '../../../images/Containerh (2).png';
import imgSeven from '../../../images/Containerh (3).png';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    text: 'Medical Facility Design & Planning',
    desc: 'We collaborate with healthcare professionals to design and plan medical facilities that prioritize patient care, operational efficiency, and compliance with industry standards.',
    img: imgFour,
  },
  {
    id: 2,
    text: 'Healthcare Project Management',
    desc: 'Our experienced project managers oversee the development of healthcare facilities, ensuring projects are completed on time, within budget, and in accordance with strict regulatory requirements.',
    img: imgFive,
  },
  {
    id: 3,
    text: 'Healthcare Operations Consulting',
    desc: 'We offer expert consulting services to optimize healthcare operations, from improving patient flow to enhancing staff efficiency and implementing cutting-edge technologies.',
    img: imgSix,
  },
  {
    id: 4,
    text: 'Medical Equipment Installation',
    desc: 'We provide comprehensive services for the installation, calibration, and maintenance of medical equipment, ensuring that healthcare providers can deliver the highest standard of care.',
    img: imgSeven,
  },
];

const Healthcare = () => {
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
              Healthcare
            </h2>
            <p
              className="text-textspan mb-4"
              style={{ fontSize: '14px', lineHeight: '1.5rem' }}
            >
              At Endless Healthcare, we recognize that every healthcare
              initiative is more than just a service—it’s a commitment to
              enhancing lives. With decades of experience and a passion for
              patient-centered care, we specialize in delivering comprehensive
              healthcare solutions that prioritize quality, safety, and
              innovation in every aspect of care delivery.
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

export default Healthcare;

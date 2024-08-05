import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import imgOne from '../../../images/t1.png';
import imgTwo from '../../../images/t2.png';
import imgThree from '../../../images/t3.png';
import imgFour from '../../../images/cf.png';
import imgFive from '../../../images/cp.png';
import imgSix from '../../../images/cv.png';
import imgSeven from '../../../images/ce.png';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    text: 'Project 1',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
    img: imgFour,
  },
  {
    id: 2,
    text: 'Project 2',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
    img: imgFive,
  },
  {
    id: 3,
    text: 'Project 3',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
    img: imgSix,
  },
  {
    id: 4,
    text: 'Project 4',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
    img: imgSeven,
  },
];

const Information = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col gap-6 md:flex-row md:gap-8"
      >
        {/* First Column: Text + Image */}
        <motion.div
          className="flex flex-col flex-1 space-y-4 mt-8 md:mt-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <h2 className="text-4xl text-secondary font-semibold mb-4 leading-hero">
              Information Technology
            </h2>
            <p className="text-textspan mb-4">
              Add your descriptive text here. This could be an introduction or
              explanation about the image.
            </p>
            <Link to="/contact/*">
              {' '}
              <button className="mb-4 rounded-lg px-6 py-4 gap-2 bg-secondary text-base">
                Contact Us
              </button>
            </Link>
          </div>
          <motion.img
            src={imgOne}
            alt="Description 1"
            className="w-full h-48 object-cover md:h-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        {/* Second Column: Image */}
        <motion.div
          className="flex-1 flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.img
            src={imgTwo}
            alt="Description 2"
            className="w-full h-48 object-cover md:h-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>

        {/* Third Column: Image */}
        <motion.div
          className="flex-1 flex flex-col items-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.img
            src={imgThree}
            alt="Description 3"
            className="w-full h-48 object-cover md:h-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <p className="mt-4 mb-10 text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-4 mb-10 text-textspan"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="font-extrabold text-2xl leading-9">Projects</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 mt-4 mb-4">
          {data.map(({ id, text, desc, img }) => (
            <motion.div
              key={id}
              className="flex flex-col flex-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.7 + id * 0.2 }} // Staggered animation
            >
              <div className="bg-dropdown p-6 rounded-t-lg">
                <p className="mb-2">{text}</p>
                <p className="text-textspan text-sm">{desc}</p>
              </div>
              <motion.img
                src={img}
                alt={`Description ${id}`}
                className="w-full h-auto object-cover rounded-b-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.7 + id * 0.2 }} // Staggered animation
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Information;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import imgOne from '../../images/Containeroneone.png';
import imgTwo from '../../images/Containertwo.png';
import imgThree from '../../images/Containeronethree.png';

const images = [
  {
    id: 1,
    src: imgOne,
    alt: 'Consumer & Real Estate',
    description: 'Consumer & Real Estate',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    src: imgTwo,
    alt: 'Consumer & Real Estate',
    description: 'Consumer & Real Estate',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    src: imgThree,
    alt: 'Consumer & Real Estate',
    description: 'Consumer & Real Estate',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const OurBlog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="py-6 mx-auto max-w-7xl px-8 my-4" ref={ref}>
      <div className="flex flex-col md:flex-row md:justify-between mb-8">
        <motion.p
          className="text-primary text-[25px] font-medium leading-[30px] md:text-[48px] md:leading-[64px] text-center md:text-left w-full md:w-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          Explore insights and get inspiration
        </motion.p>
        <motion.div
          className="flex flex-col items-center md:items-end w-full md:w-auto mt-4 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button className="w-[190px] h-[56px] rounded-[8px] py-[16px] px-[24px] bg-main text-white">
            Browse blog posts
          </button>
          <p className="font-normal text-center text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] mt-4 md:text-right w-full md:w-auto">
            Discover the latest trends. Our blog is here to guide you through
            the exciting journey
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex-grow bg-dropdown rounded-t-lg p-6 flex flex-col justify-between">
            <div>
              <p className="text-primary font-extrabold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[34px]">
                {images[0].description}
              </p>
              <p className="text-textspan mt-4 text-sm ">{images[0].text}</p>
            </div>
          </div>
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="rounded-b-lg w-full h-auto object-cover"
          />
        </motion.div>
        <div className="flex flex-col space-y-4">
          {images.slice(1).map((image, index) => (
            <motion.div
              key={image.id}
              className="flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex-grow bg-dropdown rounded-t-lg p-6 flex flex-col justify-between">
                <div>
                  <p className="text-primary font-extrabold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[34px]">
                    {image.description}
                  </p>
                  <p className="text-textspan mt-4 text-sm">{image.text}</p>
                </div>
              </div>
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-b-lg w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;

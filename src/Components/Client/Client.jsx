import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import client1 from '../../images/client1.png';
import client2 from '../../images/client2.png';
import client3 from '../../images/client3.png';
import client4 from '../../images/client4.png';

const Client = () => {
  const testimonials = [
    {
      image: client1,
    },
    {
      image: client2,
    },
    {
      image: client3,
    },
    {
      image: client4,
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section className="w-full py-12 bg-dropdown">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-secondary">
          What clients say about us
        </h2>
      </div>

      {/* Row with 4 Columns */}
      <div
        ref={ref}
        className="flex flex-wrap justify-center items-center gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className=""
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
          >
            <img
              src={testimonial.image}
              alt="client"
              className="rounded-full opacity-40"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Client;

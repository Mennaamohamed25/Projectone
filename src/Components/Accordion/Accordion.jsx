import React, { useState, useRef } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import accordionImage from '../../images/accordion.png';
import { motion, useInView } from 'framer-motion';

const accordionData = [
  {
    title: 'What industries does your company serve?',
    content:
      'We provide specialized solutions across multiple industries, including Construction, Oil & Gas, Industrial, Investments, Healthcare, Consumer & Real Estate, Information Technology, and Food & Beverage. Our diverse expertise ensures we meet the unique needs of each sector.',
  },
  {
    title: 'How does your company ensure quality across different sectors?',
    content:
      'We employ industry-specific experts and leverage advanced technologies to deliver high-quality, tailored solutions for each sector. Our commitment to excellence ensures that we meet and exceed the standards of every industry we serve.',
  },
  {
    title: 'What sets your company apart from competitors?',
    content:
      'Our unique approach lies in our ability to blend industry knowledge with innovative technology, providing customized solutions that drive growth and efficiency. We prioritize understanding our clients’ specific challenges and offer services that are not only comprehensive but also adaptable to future needs.',
  },
  {
    title: 'How can I get in touch to learn more about your services?',
    content:
      'You can contact us through our websites contact form, via email at info@endlessbuilding.org , or by calling our office directly at 009647855999989 . Our team is ready to discuss your needs and how we can help your business thrive.',
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-dropdown py-2 my-4">
      <p className="font-semibold text-2xl leading-[51.2px] text-center my-5">
        How does it work?
      </p>
      <div
        className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl py-6 grid grid-cols-12 gap-6 bg-dropdown"
        ref={ref}
      >
        {/* Accordion Section */}
        {inView && (
          <div className="col-span-12 md:col-span-8 rounded-lg overflow-hidden">
            {accordionData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-base my-5 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="flex items-center justify-between w-full p-4 text-gray-800"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-4 text-textspan">
                    <p>{item.content}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Image Section */}
        <div className="col-span-12 md:col-span-4">
          <img
            src={accordionImage}
            alt="Placeholder"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;

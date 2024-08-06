import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import reviewImg from '../../images/review.png';
import { motion, useInView } from 'framer-motion';

const reviews = [
  {
    id: 1,
    stars: 4,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
    image: reviewImg,
    name: 'Menna',
    title: 'Frontend engineer',
  },
  {
    id: 2,
    stars: 1,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
    image: reviewImg,
    name: 'Jane Smith',
    title: 'CTO',
  },
  {
    id: 3,
    stars: 5,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
    image: reviewImg,
    name: 'Jane Smith',
    title: 'CTO',
  },
  {
    id: 4,
    stars: 1,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
    image: reviewImg,
    name: 'Jane Smith',
    title: 'CTO',
  },
  {
    id: 5,
    stars: 5,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
    image: reviewImg,
    name: 'Jane Smith',
    title: 'CTO',
  },
  {
    id: 6,
    stars: 3,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...',
    image: reviewImg,
    name: 'Jane Smith',
    title: 'CTO',
  },
];

const ResponsiveSlider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="py-8 bg-dropdown ">
      <p className="font-semibold text-[20px] leading-[64px] mx-auto max-w-7xl px-8">
        What clients say about us
      </p>
      <div
        className="relative overflow-hidden mx-auto max-w-7xl px-8"
        ref={ref}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 4.5,
              slidesPerGroup: 1,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="p-4 bg-white h-auto rounded-lg shadow-lg flex flex-col justify-between sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: review.id * 0.1 }}
                className="flex items-center mb-2"
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.stars ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: review.id * 0.2 }}
                className="mb-4 text-gray-600 flex-grow"
              >
                {review.text}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: review.id * 0.3 }}
                className="flex items-center"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full "
                />
                <div className="ms-5">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ResponsiveSlider;

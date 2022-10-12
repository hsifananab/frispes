import React from 'react';
import { forwardRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { motion } from 'framer-motion';

import SpacesCard from './SpacesCard';
import { spacesSlides } from '../../data/data';

import 'swiper/css';
import 'swiper/css/pagination';

const slidesMotion = {
  rest: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const SpacesSlider = forwardRef((props, ref) => {
  return (
    <Swiper
      ref={ref}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      slidesPerGroup={3}
      keyboard={true}
      grabCursor={true}
      loop={true}
      pagination={{ type: 'progressbar' }}
    >
      {spacesSlides.map((item, index) => (
        <SwiperSlide key={index}>
          <motion.div
            variants={slidesMotion}
            initial="rest"
            whileInView="visible"
          >
            <SpacesCard item={item} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export const MSpacesSlider = motion(SpacesSlider);

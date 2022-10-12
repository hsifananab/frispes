import React from 'react';
import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard } from 'swiper/core';
import { EffectCreative } from 'swiper';
import { Pagination } from 'swiper';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

import { introSlides } from '../../data/data';

SwiperCore.use([Keyboard]);

export const IntroSlider = forwardRef((props, ref) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
      ref={ref}
      modules={[Pagination, EffectCreative]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      keyboard={true}
      grabCursor={true}
      loop={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, 0],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      style={{
        '--swiper-pagination-width': '',
        '--swiper-pagination-color': '#FF5722',
        '--swiper-pagination-bullet-inactive-color': '#ffffff',
        '--swiper-pagination-bullet-inactive-opacity': '0.5',
      }}
    >
      {introSlides.map(item => (
        <SwiperSlide key={item.id}>
          <div className="max-h-[566px] flex items-center justify-center">
            <img className="" src={item.image} alt={item.id} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export const MIntroSlider = motion(IntroSlider);

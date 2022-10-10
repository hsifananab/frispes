import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import { introSlides } from '../../data/data';

const IntroSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      pagination={pagination}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      style={{
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
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ... */}
    </Swiper>
  );
};

export default IntroSlider;

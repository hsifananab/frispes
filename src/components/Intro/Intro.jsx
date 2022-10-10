import React from 'react';
import Subtitle from '../UI/Subtitle';
import IntroSlider from './IntroSlider';

const Intro = () => {
  return (
    <div className="flex items-center justify-center my-[60px]" id="home">
      <div className="max-w-[1110px] w-full">
        <div className="mb-2">
          <Subtitle>Introducing</Subtitle>
        </div>
        <div className="relative mb-[33px]">
          <h1 className="max-w-2xl font-lora font-bold text-[52px] leading-[67px] text-color-primary">
            <span className="text-color-secondary">Revolutionary</span>{' '}
            co-working space to realize your innovation
          </h1>
          <div className="absolute top-[10px] right-0 max-w-sm">
            <p className="font-lato text-color-gray text-xl leading-[30px]">
              In frispes, we spearhead new initiatives and provide mentorship to
              a new startup, and help grow their opportunities in key local,
              regional and global markets
            </p>
          </div>
        </div>
        <div className="">
          <IntroSlider />
        </div>
      </div>
    </div>
  );
};

export default Intro;

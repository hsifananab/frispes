import React from 'react';
import { motion } from 'framer-motion';
import { MSubtitle } from '../UI/Subtitle';
import { MIntroSlider } from './IntroSlider';

const introAnimation = {
  rest: { opacity: 0, x: -100 },
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.5 },
  }),
};

const headerAnimation = {
  rest: { color: '#10375C' },
  visible: custom => ({
    color: '#DD2C00',
    transition: { delay: custom * 0.5 },
  }),
};

const Intro = () => {
  return (
    <motion.div
      className="flex items-center justify-center my-[60px]"
      id="home"
      initial="rest"
      whileInView="visible"
      iewport={{ amount: 0.2, once: true }}
    >
      <div className="max-w-[1110px] w-full">
        <div className="mb-2">
          <MSubtitle variants={introAnimation} custom={1}>
            Introducing
          </MSubtitle>
        </div>
        <div className="relative mb-[33px]">
          <motion.h1
            className="max-w-2xl font-lora font-bold text-[52px] leading-[67px] text-color-primary"
            variants={introAnimation}
            custom={2}
          >
            <motion.span
              variants={headerAnimation}
              initial="rest"
              animate="visible"
              custom={3}
            >
              Revolutionary
            </motion.span>{' '}
            co-working space to realize your innovation
          </motion.h1>
          <div className="absolute top-[10px] right-0 max-w-sm">
            <motion.p
              className="font-lato text-color-gray text-xl leading-[30px]"
              variants={introAnimation}
              custom={4}
            >
              In frispes, we spearhead new initiatives and provide mentorship to
              a new startup, and help grow their opportunities in key local,
              regional and global markets
            </motion.p>
          </div>
        </div>
        <motion.div className="" variants={introAnimation} custom={5}>
          <MIntroSlider />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;

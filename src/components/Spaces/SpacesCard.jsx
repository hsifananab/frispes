import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

import decor from './../../images/spaces-decor-elem.png';

const bgMotion = {
  rest: { opacity: 1 },
  hover: { opacity: 0 },
};

const cardMotion = {
  rest: { height: 420 },
  hover: {
    height: 467,
    // boxShadow: '20px 27px 18px 0px rgba(16, 55, 92, 0.3)',
  },
};

const textAnimation = {
  rest: custom => ({ opacity: 0, x: custom * 100 }),
  hover: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.25, mass: 1 },
  },
};

const decorElemMotion = {
  rest: { opacity: 0, x: -243, y: 313 },
  hover: { opacity: 1, x: 0, y: 0, transition: { delay: 0.2, mass: 1 } },
};

const buttonMotion = {
  rest: { width: 72 },
  hover: { width: 255, transition: { delay: 0.2, mass: 1 } },
};

const iconButtonMotion = {
  rest: { x: -59 },
  hover: { x: 0, transition: { delay: 0.2, mass: 1 } },
};

const textMotion = {
  rest: { display: 'block' },
  hover: { display: 'none' },
};

const SpacesCard = ({ item, index }) => {
  return (
    <>
      <motion.div
        className="relative w-[350px] cursor-pointer overflow-hidden"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          className="bg-color-primary relative flex flex-col justify-center items-center text-center gap-[14px] "
          variants={cardMotion}
        >
          <motion.div
            className="z-10 absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${item.image})` }}
            variants={bgMotion}
          ></motion.div>

          <motion.img
            className="absolute top-4 right-4"
            src={decor}
            variants={decorElemMotion}
          />
          <motion.h3
            className="font-lora text-[32px] leading-[41px] text-white"
            variants={textAnimation}
            custom={1}
          >
            {item.name}
          </motion.h3>
          <motion.p
            className="font-lato text-lg max-w-[255px] text-white"
            variants={textAnimation}
            custom={-1}
          >
            {item.desc}
          </motion.p>
          <motion.div
            className="h-[72px] bg-color-secondary absolute bottom-0 left-0 text-white font-bold flex justify-center items-center gap-8 overflow-hidden z-10"
            variants={buttonMotion}
          >
            <motion.span
              className="font-lato text-lg leading-[22px] text-center"
              variants={textAnimation}
              custom={-1}
            >
              Check availability
            </motion.span>
            <motion.span variants={iconButtonMotion}>
              <FaChevronRight />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.p
          className="text-center font-lato font-bold text-xl leading-6 mt-[25px]"
          variants={textMotion}
        >
          {item.name}
        </motion.p>
      </motion.div>
    </>
  );
};

export default SpacesCard;

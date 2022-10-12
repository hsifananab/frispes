import React from 'react';
import { motion } from 'framer-motion';

import ArrowButtonsController from '../UI/ArrowButtonsController';
import { MSectionTitle } from '../UI/SectionTitle';
import { MSpacesSlider } from './SpacesSlider';

const blockAnimation = {
  rest: { opacity: 0 },
  visible: custom => ({ opacity: 1, transition: { delay: custom * 0.5 } }),
};

const Spaces = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center mt-[112px] mb-[60px]"
      id="workspace"
      initial="rest"
      whileInView="visible"
      viewport={{ amount: 0.8, once: true }}
    >
      <div className="max-w-[1110px] w-full">
        <div className="grid grid-cols-[4fr,5fr,3fr] items-center mb-[52px]">
          <MSectionTitle variants={blockAnimation} custom={1}>
            Our Spaces
          </MSectionTitle>
          <div className="flex justify-center">
            <motion.p
              className="font-lato text-color-gray text-[18px] leading-[28px]"
              variants={blockAnimation}
              custom={2}
            >
              Our space is designed to give you a different experience when
              working with your team or personally
            </motion.p>
          </div>
          <motion.div
            className="flex justify-end"
            variants={blockAnimation}
            custom={3}
          >
            <ArrowButtonsController />
          </motion.div>
        </div>
        <motion.div variants={blockAnimation} custom={4}>
          <MSpacesSlider />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Spaces;

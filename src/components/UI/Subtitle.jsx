import React from 'react';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const Subtitle = forwardRef(({ children }, ref) => {
  return (
    <div className="flex items-center gap-[15px]" ref={ref}>
      <div className="font-lato text-xl text-color-blacks">{children}</div>
      <div className="w-[73px] h-[2px] bg-color-black mt-[3px]" />
    </div>
  );
});

export const MSubtitle = motion(Subtitle);

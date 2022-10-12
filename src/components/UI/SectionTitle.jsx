import React from 'react';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = forwardRef(({ children }, ref) => {
  return (
    <h2
      className="font-lora font-bold text-[40px] leading-[51px] text-color-primary"
      ref={ref}
    >
      {children}
    </h2>
  );
});

export const MSectionTitle = motion(SectionTitle);

import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const ArrowButton = ({ direction }) => {
  return (
    <div className="text-[28px] text-color-gray-1 hover:text-color-secondary hover:scale-x-125 transition-all">
      {direction === 'left' ? (
        <BsArrowLeft className="hover:translate-x-2 transition-all" />
      ) : (
        <BsArrowRight className="hover:-translate-x-2 transition-all" />
      )}
    </div>
  );
};

export default ArrowButton;

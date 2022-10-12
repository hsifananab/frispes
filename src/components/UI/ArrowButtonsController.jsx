import React from 'react';
import ArrowButton from './ArrowButton';

const ArrowButtonsController = () => {
  return (
    <div className="grid grid-cols-2 justify-items-end gap-6">
      <ArrowButton direction="left" />
      <ArrowButton direction="right" />
    </div>
  );
};

export default ArrowButtonsController;

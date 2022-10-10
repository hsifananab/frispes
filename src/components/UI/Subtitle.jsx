import React from 'react';

const Subtitle = ({ children }) => {
  return (
    <div className="flex items-center gap-[15px]">
      <div className="font-lato text-xl text-color-blacks">{children}</div>
      <div className="w-[73px] h-[2px] bg-color-black mt-[3px]" />
    </div>
  );
};

export default Subtitle;

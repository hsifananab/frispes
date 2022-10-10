import React from 'react';
import Button from '../UI/Button';
import SectionTitle from '../UI/SectionTitle';

const Spaces = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-[112px] mb-[60px]"
      id="workspace"
    >
      <div className="grid grid-cols-[4fr,5fr,3fr] max-w-[1110px] w-full items-center">
        <SectionTitle>Our Spaces</SectionTitle>
        <div className="flex justify-center">
          <p className="font-lato text-color-gray text-[18px] leading-[28px]">
            Our space is designed to give you a different experience when
            working with your team or personally
          </p>
        </div>
        <div className="flex justify-end">
          <Button>test</Button>
        </div>
      </div>

      <div className="m-8 h-52 w-52 bg-color-secondary relative">
        <div className="h-52 w-52 bg-color-primary absolute top-0 left-0 z-1"></div>
        <p className="text-transparent text-6xl">PEACE</p>
      </div>
    </div>
  );
};

export default Spaces;

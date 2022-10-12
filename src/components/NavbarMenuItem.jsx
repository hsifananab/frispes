import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavbarMenuItem = ({ isSelected, handleClick, title, path }) => {
  return (
    <Link
      to={path}
      smooth={true}
      duration={500}
      offset={-80}
      className="cursor-pointer"
    >
      <motion.div
        onClick={handleClick}
        initial={{ color: '#222831' }}
        animate={{ color: isSelected ? '#FF5722' : '#222831' }}
        className="relative"
      >
        {isSelected && <ActiveLine />}
        {title}
      </motion.div>
    </Link>
  );
};

export default NavbarMenuItem;

const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeItem"
      className="w-[calc(100%-10px)] h-[2px] absolute -bottom-1  left-[5px] bg-color-secondary "
    />
  );
};

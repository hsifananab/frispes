import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavbarMenuItem = ({ isSelected, handleClick, item }) => {
  return (
    <motion.div
      onClick={handleClick}
      initial={{ color: '#222831' }}
      animate={{ color: isSelected ? '#FF5722' : '#222831' }}
    >
      <Link to={item.path} smooth={true} duration={500} spy={true} offset={-75}>
        {item.title}
      </Link>
    </motion.div>
  );
};

export default NavbarMenuItem;

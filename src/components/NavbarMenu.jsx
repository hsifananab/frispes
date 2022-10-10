import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import { useStateContext } from '../contexts/ContextProvider';
import { navLinks } from '../data/data';
import NavbarMenuItem from './NavbarMenuItem';

const NavbarMenu = () => {
  const { activeNavIndex, setActiveNavIndex } = useStateContext();
  console.log(activeNavIndex);
  return (
    <nav className="self-end flex-2 font-lato font-bold text-color-black mb-[3px]">
      <ul className="flex justify-between items-centers gap-10 p-1">
        {navLinks.map((item, index) => (
          <NavbarMenuItem
            className="hover:text-color-secondary cursor-pointer transition-all"
            key={index}
            isSelected={activeNavIndex === index}
            handleClick={() => setActiveNavIndex(index)}
            item={item}
            activeClass="active"
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenu;

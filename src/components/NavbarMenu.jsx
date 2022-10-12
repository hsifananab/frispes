import React from 'react';
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
            key={index}
            title={item.title}
            path={item.path}
            isSelected={activeNavIndex === index}
            handleClick={() => setActiveNavIndex(index)}
          ></NavbarMenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenu;

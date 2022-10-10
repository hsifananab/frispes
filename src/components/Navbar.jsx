import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import NavbarMenu from './NavbarMenu';
import Button from './UI/Button';
import Logo from './UI/Logo';

const Navbar = () => {
  const { scrollNav } = useStateContext();
  return (
    <div className="flex items-center justify-center h-auto my-[45px] sticky top-0 z-10 py-[15px] bg-white">
      <div className="max-w-[1110px] w-full flex items-center justify-between ">
        <div className="flex-1">
          <Logo />
        </div>
        <NavbarMenu />
        <div className="flex-1 flex justify-end">
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Logo = () => {
  const scrollToTop = () => scroll.scrollToTop();
  return (
    <Link
      to="/"
      className="font-playfair-display font-bold text-2xl text-color-primary cursor-pointer"
      onClick={scrollToTop}
    >
      Frispes.
    </Link>
  );
};

export default Logo;

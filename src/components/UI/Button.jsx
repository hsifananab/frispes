import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="text-color-secondary font-lato font-bold px-6 py-3 bg-transparent hover:text-white hover:bg-color-secondary hover:shadow-[0px_4px_16px_rgba(255,87,34,0.32)] transition-all "
    >
      {children}
    </button>
  );
};

export default Button;

import React, { createContext, useContext, useEffect, useState } from 'react';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  const changeNav = () => {
    if (window.scrollY >= 30) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <stateContext.Provider
      value={{
        scrollNav,
        setScrollNav,
        changeNav,
        activeNavIndex,
        setActiveNavIndex,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);

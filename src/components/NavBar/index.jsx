import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

const LINKS = ['home', 'about', 'experience', 'portfolio', 'contact'];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:px-4 flex justify-center items-center w-full fixed z-20 bg-gradient-to-b from-white to-transparent bg-opacity-40 backdrop-blur-sm">
      <DesktopNav list={LINKS} />

      {isOpen && <MobileNav list={LINKS} onClose={() => setIsOpen(false)} />}

      <button
        className="p-3 z-10 ml-auto text-fuchsia-900 hover:scale-105 focus:scale-105 sm:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </div>
  );
};

export default NavBar;

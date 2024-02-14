import React, { useReducer } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

// const LINKS = [
//   { id: 1, link: 'home' },
//   { id: 2, link: 'about' },
//   { id: 2, link: 'experience' },
//   { id: 2, link: 'portfolio' },
//   { id: 2, link: 'contact' },
// ];

const LINKS = ['home', 'about', 'experience', 'portfolio', 'contact'];

const NavBar = () => {
  const [isOpen, toggleIsOpen] = useReducer((prev) => !prev, false);

  return (
    <div className="px-4 flex justify-center items-center w-full h-20 fixed z-20">
      <DesktopNav list={LINKS} />

      {isOpen && <MobileNav list={LINKS} />}

      <button
        className="p-3 z-10 ml-auto rounded-full bg-fuchsia-950 text-gray-50 hover:scale-105 focus:scale-105 md:hidden"
        onClick={toggleIsOpen}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
    </div>
  );
};

export default NavBar;

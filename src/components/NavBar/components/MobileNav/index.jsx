import React from 'react';
import { Link } from 'react-scroll';

const MobileNav = ({ list, onClose }) => (
  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-fuchsia-800 to-fuchsia-300 bg-opacity-70 md:hidden">
    {list.map((link) => (
      <li
        key={link}
        className="p-4 text-4xl capitalize cursor-pointer font-medium text-fuchsia-950 hover:scale-105 duration-200"
      >
        <Link onClick={onClose} to={link} offset={-20} smooth duration={300}>
          {link}
        </Link>
      </li>
    ))}
  </ul>
);

export default MobileNav;

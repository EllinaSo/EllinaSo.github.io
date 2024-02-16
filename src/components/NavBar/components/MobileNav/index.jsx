import React from 'react';
import { Link } from 'react-scroll';

const MobileNav = ({ list, onClose }) => (
  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-50 sm:hidden">
    {list.map((link) => (
      <li
        key={link}
        className="p-3 text-2xl capitalize cursor-pointer font-medium text-fuchsia-950 hover:scale-105 duration-200"
      >
        <Link onClick={onClose} to={link} offset={-20} smooth duration={300}>
          {link}
        </Link>
      </li>
    ))}
  </ul>
);

export default MobileNav;

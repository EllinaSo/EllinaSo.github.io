import React from 'react';
import { Link } from 'react-scroll';

const DesktopNav = ({ list }) => (
  <ul className="hidden sm:flex text-base md:text-xl">
    {list.map((link) => (
      <li
        key={link}
        className="py-3 px-5 capitalize font-medium cursor-pointer text-fuchsia-950 hover:scale-105 duration-200"
      >
        <Link to={link} offset={-50} smooth duration={300}>
          {link}
        </Link>
      </li>
    ))}
  </ul>
);

export default DesktopNav;

import React from 'react';
import { Link } from 'react-scroll';

const DesktopNav = ({ list }) => (
  <ul className="hidden md:flex">
    {list.map((link) => (
      <li
        key={link}
        className="text-xl px-5 capitalize cursor-pointer font-medium text-fuchsia-950 hover:scale-105 duration-200"
      >
        <Link to={link} offset={-50} smooth duration={300}>
          {link}
        </Link>
      </li>
    ))}
  </ul>
);

export default DesktopNav;

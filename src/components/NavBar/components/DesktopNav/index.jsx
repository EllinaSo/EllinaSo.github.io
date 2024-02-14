import React from 'react';

const DesktopNav = ({ list }) => (
  <ul className="hidden md:flex">
    {list.map((link) => (
      <li
        key={link}
        className="text-xl px-4 capitalize cursor-pointer font-medium text-fuchsia-950 hover:scale-105 duration-200"
      >
        {link}
      </li>
    ))}
  </ul>
);

export default DesktopNav;

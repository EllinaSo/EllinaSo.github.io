import React from 'react';

const MobileNav = ({ list }) => (
  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-fuchsia-800 to-fuchsia-300 bg-opacity-70 md:hidden">
    {list.map((link) => (
      <li
        key={link}
        className="p-4 text-4xl capitalize cursor-pointer font-medium text-fuchsia-950 hover:scale-105 duration-200"
      >
        {link}
      </li>
    ))}
  </ul>
);

export default MobileNav;

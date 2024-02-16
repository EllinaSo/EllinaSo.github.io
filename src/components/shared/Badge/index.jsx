import React from 'react';

const Badge = ({ children }) => (
  <span className="px-4 py-1 rounded-2xl ring-2 ring-inset bg-white ring-fuchsia-800/40 text-base md:text-lg">
    {children}
  </span>
);

export default Badge;

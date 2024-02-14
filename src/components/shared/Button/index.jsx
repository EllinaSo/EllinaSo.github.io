import React from 'react';

const Button = ({ children }) => (
  <button className="text-xl flex items-center gap-x-3 text-white py-2 px-6  bg-fuchsia-900 rounded-3xl hover:scale-105 focus:scale-110 duration-200">
    {children}
  </button>
);

export default Button;

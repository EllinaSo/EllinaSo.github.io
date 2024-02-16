import React from 'react';

const YEAR = new Date().getFullYear();

const Footer = () => (
  <div className="px-4 flex justify-center items-center w-full h-16 text-fuchsia-900">
    <p>Copyright © {YEAR} Ellina Soroka</p>
  </div>
);

export default Footer;

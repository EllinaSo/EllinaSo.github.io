import React from 'react';

const CLASS_NAME =
  'py-2 px-6 rounded-3xl flex items-center gap-x-3 text-white text-xl bg-fuchsia-900 cursor-pointer hover:scale-105 focus:scale-105 duration-200 outline-none';

const Button = ({ isLink, className, ...props }) =>
  isLink ? (
    <a className={`${CLASS_NAME} ${className}`} {...props} />
  ) : (
    <button className={`${CLASS_NAME} ${className}`} {...props} />
  );

export default Button;

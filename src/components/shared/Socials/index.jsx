import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-Icons/fa';

const CONTACTS = [
  { link: 'https://www.linkedin.com/in/ellina-s/', Icon: <FaLinkedinIn size={35} />, newTab: true },
  { link: 'mailto:ellina.ibr@gmail.com', Icon: <FaEnvelope size={35} />, newTab: false },
  { link: 'https://github.com/EllinaSo', Icon: <FaGithub size={35} />, newTab: true },
];

const Socials = () => (
  <>
    {CONTACTS.map(({ link, Icon, newTab }, index) => (
      <a
        href={link}
        key={index}
        className="hover:scale-105 focus:scale-110 duration-200"
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {Icon}
      </a>
    ))}
  </>
);

export default Socials;

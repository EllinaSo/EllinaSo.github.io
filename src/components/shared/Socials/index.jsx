import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-Icons/fa';
import { FiDownload } from 'react-icons/fi';

import Button from '../Button';

const CONTACTS = [
  {
    link: 'https://www.linkedin.com/in/ellina-s/',
    label: 'LinkedIn link',
    Icon: <FaLinkedinIn size={35} />,
    newTab: true,
  },
  { link: 'mailto:ellina.ibr@gmail.com', label: 'E-mail', Icon: <FaEnvelope size={35} />, newTab: false },
  { link: 'https://github.com/EllinaSo', label: 'GitHub link', Icon: <FaGithub size={35} />, newTab: true },
];

const Socials = ({ withPortfolio }) => (
  <div className="flex items-center gap-x-8 text-fuchsia-900">
    {withPortfolio && (
      <Button isLink href="/Ellina Soroka Resume.pdf" download>
        Resume
        <FiDownload />
      </Button>
    )}

    {CONTACTS.map(({ link, Icon, newTab, label }, index) => (
      <a
        href={link}
        key={index}
        className="hover:scale-110 focus:scale-110 duration-200 outline-none"
        aria-label={label}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {Icon}
      </a>
    ))}
  </div>
);

export default Socials;

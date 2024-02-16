import React from 'react';
import { FiDownload } from 'react-icons/fi';
import cube from '../../assets/cube.webp';
import Socials from '../shared/Socials';
import Button from '../shared/Button';

const Home = () => {
  return (
    <section name="home" className="h-screen relative p-6 overflow-hidden">
      <img src={cube} alt="" className="absolute z-0 rotate-45 top-0 -right-5 w-60 md:w-auto" />

      <div className="relative z-10 max-w-screen-lg mx-auto h-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-8xl font-medium mb-2 md:mb-4">Ellina Soroka</h1>
        <p className="text-xl md:text-3xl italic mb-6 md:mb-14 text-fuchsia-900">
          Front-end developer on the path to Full-stack
        </p>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8 text-fuchsia-900">
          <Button isLink href="/Ellina Soroka Resume.pdf" download>
            Resume
            <FiDownload />
          </Button>
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Home;

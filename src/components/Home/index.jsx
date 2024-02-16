import React from 'react';
import cube from '../../assets/cube.webp';
import Socials from '../shared/Socials';

const Home = () => {
  return (
    <section name="home" className="h-screen relative p-6 overflow-hidden">
      <img src={cube} alt="" className="absolute z-0 rotate-45 top-0 -right-5 w-60 md:w-auto" />

      <div className="relative z-10 max-w-screen-lg mx-auto h-full flex flex-col justify-center items-start">
        <h1 className="text-3xl md:text-8xl font-medium mb-4">Ellina Soroka</h1>
        <p className="text-xl md:text-3xl italic mb-14 text-fuchsia-900">
          Front-end developer on the path to Full-stack
        </p>

        <Socials withPortfolio />
      </div>
    </section>
  );
};

export default Home;

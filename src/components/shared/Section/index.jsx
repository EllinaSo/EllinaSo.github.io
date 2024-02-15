import React from 'react';

const Section = ({ title, sectionName, children, imgSrc, imgClassName }) => (
  <section name={sectionName} className="relative px-6 py-8 text-xl md:text-xl">
    <img src={imgSrc} alt="" className={`absolute z-0 w-60 md:w-auto max-w-md top-0 -right-40 ${imgClassName}`} />

    <div className="relative z-10 max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-5xl font-medium mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;

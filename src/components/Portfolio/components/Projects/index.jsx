import React from 'react';

const Projects = ({ list }) => (
  <div className="grid grid-cols-3 gap-10 text-lg">
    {list.map(({ img, title, description }) => (
      <a
        key={title}
        href={`${process.env.PUBLIC_URL}/portfolio/${title}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer rounded-3xl ring-2 ring-fuchsia-800/40 overflow-hidden hover:scale-105 focus:scale-105 duration-200 outline-none"
      >
        <div className="w-full h-56 overflow-hidden border-b">
          <img src={img} alt={`'${title}' project preview`} />
        </div>
        <div className="p-4">{description}</div>
      </a>
    ))}
  </div>
);

export default Projects;

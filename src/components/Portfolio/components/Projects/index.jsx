import React from 'react';

const Projects = ({ list }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-lg">
    {list.map(({ img, title, description, demo, src }) => (
      <div
        key={title}
        className="flex flex-col rounded-3xl bg-white ring-2 ring-fuchsia-800/40 overflow-hidden outline-none"
      >
        <div className="w-full h-32 md:h-56 overflow-hidden border-b">
          <img src={img} alt={`'${title}' project preview`} />
        </div>
        <div className="p-4">{description}</div>

        <div className="flex  mt-auto text-center border-t">
          {demo && (
            <a
              className="p-2 border-r w-1/2 flex-grow hover:scale-110 focus:scale-110 duration-200 outline-none"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
          {src && (
            <a
              className="p-2 w-1/2 flex-grow hover:scale-110 focus:scale-110 duration-200 outline-none"
              href={src}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default Projects;

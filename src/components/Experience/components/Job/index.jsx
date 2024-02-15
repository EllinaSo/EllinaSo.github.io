import React from 'react';

const Job = ({ period, jobTitle, companyName, companyDescription, jobDescription }) => (
  <div>
    <p className="mb-2">
      <span className="rounded-2xl px-4 py-1 mr-2 ring-1 ring-inset bg-white ring-fuchsia-500/40 text-lg">
        {period}
      </span>
      <span className="mb-2 font-bold">{jobTitle}</span> at {companyName}
    </p>
    <p className="mb-2 text-gray-600 text-sm">{companyDescription}</p>
    <p className="mb-4">{jobDescription}</p>
  </div>
);

export default Job;

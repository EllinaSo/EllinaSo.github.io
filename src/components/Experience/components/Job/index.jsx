import React from 'react';
import Badge from '../../../shared/Badge';

const Job = ({ period, jobTitle, companyName, companyDescription, jobDescription }) => (
  <div>
    <p className="mb-2">
      <Badge>{period}</Badge>
      <span className="ml-2 mb-2 font-bold">{jobTitle}</span> at {companyName}
    </p>
    <p className="mb-2 text-gray-600 text-sm">{companyDescription}</p>
    <p className="mb-4">{jobDescription}</p>
  </div>
);

export default Job;

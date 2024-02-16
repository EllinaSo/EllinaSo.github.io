import React from 'react';
import Badge from '../../../shared/Badge';

const List = ({ items, label, className, badges }) => (
  <div className={className}>
    <p className="mb-4 font-bold">{label}</p>
    <ul className={`flex text-lg ${badges ? ' flex-wrap gap-4' : 'flex-col gap-2'}`}>
      {items.map((item, index) =>
        badges ? (
          <li key={index} className="block">
            <Badge>{item}</Badge>
          </li>
        ) : (
          <li key={index}>✔️ {item}</li>
        )
      )}
    </ul>
  </div>
);

export default List;

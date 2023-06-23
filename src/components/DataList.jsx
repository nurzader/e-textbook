import React from 'react';
import { Link } from 'react-router-dom';

const DataList = ({ value }) => {
  return (
    <li key={value.id} className="flex flex-col gap-3">
      <Link to={`inner/${value.path}/${value.id}`}>
        <span className="titleLink">{value.title}</span>
      </Link>
      <ul className="flex flex-col gap-3 ml-5">
        {value.subjects.map((theme, i) => (
          <li key={i} className="list-decimal">
            <span className="ml-3 text-blue-600">{theme.theme}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DataList;

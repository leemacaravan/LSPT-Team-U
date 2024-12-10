import React from 'react';

const ResultsList = ({ results }) => {
  return (
    <ul className="results-list">
      {results.map((result, index) => (
        <li key={index} className="border-b p-2">
          {result.title}
        </li>
      ))}
    </ul>
  );
};

export default ResultsList;

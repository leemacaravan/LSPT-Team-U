import React from 'react';
import '../styles/results.css';

const Results = () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || 'Nothing';

  const results = [
    {
      title: 'Rensselaer Polytechnic Institute (RPI) :: Architecture, Business ...',
      url: 'https://www.rpi.edu',
      description: 'More than 145 programs at the bachelor\'s, master\'s, and doctoral levels.',
    },
    {
      title: 'Rensselaer Polytechnic Institute Athletics',
      url: 'https://www.rpiatheletics.com',
      description: 'The official athletics website for the Rensselaer Polytechnic Institute Engineers.',
    },
    // Add other results as needed
  ];

  return (
    <div>
      <div className="header">
        <img
          src="https://th.bing.com/th/id/R.672dbd113f0892e02c650da86d920af8?rik=u8DcRYYrAczqbw&pid=ImgRaw&r=0"
          alt="Rensselaer Crest"
        />
        Rensselaer Polytechnic Institute
      </div>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="q" className="search-input" placeholder="Search the web..." />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="content">
        <h1>Search Results</h1>
        <p>Your search for "<span className="query-text">{query}</span>" returned the following results:</p>
        {results.map((result, index) => (
          <div className="result" key={index}>
            <a href={result.url} className="result-title">{result.title}</a>
            <div className="result-url">{result.url}</div>
            <p className="result-description">{result.description}</p>
          </div>
        ))}
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Results;

import React from 'react';
import '../styles/general.css'; // Ensure this path matches your project structure

const General = () => {
  const navigateToResultsPage = () => {
    const query = document.querySelector('.search-input').value;
    window.location.href = `/results?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="container">
      <div className="header">
        <img
          src="https://th.bing.com/th/id/R.672dbd113f0892e02c650da86d920af8?rik=u8DcRYYrAczqbw&pid=ImgRaw&r=0"
          alt="Rensselaer Crest"
        />
        Rensselaer Polytechnic Institute
      </div>
      <div className="search-box">
        <h1>Simple Search Engine</h1>
        <form className="search-form" onSubmit={(e) => {
          e.preventDefault();
          navigateToResultsPage();
        }}>
          <input type="text" name="q" className="search-input" placeholder="Search the web..." />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="scrollable-queries">
          <table className="popular-queries">
            {[...Array(10)].map((_, i) => (
              <tr key={i}><td><a href={`/results?q=Query%20${i + 1}`}>Query {i + 1}</a></td></tr>
            ))}
          </table>
        </div>
      </div>
      <div className="info-box">
        <h2>WHAT AM I SEARCHING?</h2>
        <p>
          This search engine helps users quickly find RPI-specific resources, including faculty
          profiles, campus services, academic programs, and research. Tailored for the RPI
          community, it provides fast, relevant results for access to RPI's digital content.
        </p>
      </div>
      <div className="footer">Footer Content</div>
    </div>
  );
};

export default General;

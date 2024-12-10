const express = require('express');
const router = express.Router();

// Mock search results
const results = [
  { title: 'Rensselaer Polytechnic Institute', url: 'https://www.rpi.edu', description: 'More than 145 programs at the bachelor\'s, master\'s, and doctoral levels.' },
  { title: 'RPI Athletics', url: 'https://www.rpiatheletics.com', description: 'The official athletics website for the Rensselaer Polytechnic Institute Engineers.' },
  { title: 'r/RPI', url: 'https://www.reddit.com/r/RPI/', description: 'Welcome to RPI\'s subreddit. Home of Puckman and the \'Tute Screw.' },
];

router.get('/', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  // Simple filtering based on the query
  const filteredResults = results.filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase())
  );

  res.json({ query, results: filteredResults });
});

module.exports = router;

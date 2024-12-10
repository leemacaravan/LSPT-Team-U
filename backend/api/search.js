const express = require('express');
const router = express.Router();

router.post('/search', async (req, res) => {
  const { query } = req.body;
  // Mock response
  const results = [
    { title: `Result for ${query} - 1` },
    { title: `Result for ${query} - 2` },
  ];
  res.json({ results });
});

module.exports = router;

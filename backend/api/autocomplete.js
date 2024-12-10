const express = require('express');
const router = express.Router();

router.get('/autocomplete', (req, res) => {
  const { partialQuery } = req.query;
  const suggestions = [
    `${partialQuery} Suggestion 1`,
    `${partialQuery} Suggestion 2`,
  ];
  res.json({ suggestions });
});

module.exports = router;

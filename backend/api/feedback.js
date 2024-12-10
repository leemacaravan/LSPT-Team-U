const express = require('express');
const router = express.Router();

router.post('/feedback', (req, res) => {
  const { label, title, text } = req.body;
  // Store feedback (e.g., in a database)
  console.log('Feedback received:', { label, title, text });
  res.status(200).send('Feedback submitted');
});

module.exports = router;

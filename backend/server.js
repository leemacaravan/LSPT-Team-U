const express = require('express');
const bodyParser = require('body-parser');
const searchRoutes = require('./api/search');
const autocompleteRoutes = require('./api/autocomplete');
const feedbackRoutes = require('./api/feedback');

const app = express();
app.use(bodyParser.json());

app.use('/api', searchRoutes);
app.use('/api', autocompleteRoutes);
app.use('/api', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import General from './pages/General';
import Results from './pages/Results';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<General />} />
        {/* Results route */}
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;

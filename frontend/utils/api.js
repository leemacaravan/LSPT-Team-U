import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import General from './pages/General';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;

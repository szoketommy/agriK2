import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import LoginPage from './pages/Login.js';
import PreturiPage from './pages/Preturi.js';
import ResursePage from './pages/Resurse.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/login" element={<LoginPage />} />
         
      <Route path="/preturi" element={<PreturiPage />} />
         
      <Route path="/resurse" element={<ResursePage />} />
    </Routes>
  );
}

export default App;

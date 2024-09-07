import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PortfolioPage from './components/PortfolioPage';
import InfoPage from './components/InfoPage';
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectPage'; 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />  
      </Routes>
    </Router>
  );
}

export default App;
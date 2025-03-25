import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DialogPage from '../pages/DialogPage';
import RouteAnimationPage from '../pages/RouteAnimationPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog" element={<DialogPage />} />
        <Route path="/animation" element={<RouteAnimationPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes; 
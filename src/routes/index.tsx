import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const DialogDemo = lazy(() => import('../pages/DialogDemo'));
const AnimationPage = lazy(() => import('../pages/AnimationPage'));
const RouteAnimationPage = lazy(() => import('../pages/RouteAnimationPage'));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>加载中...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dialog" element={<DialogDemo />} />
          <Route path="/animation" element={<AnimationPage />} />
          <Route path="/route-animation" element={<RouteAnimationPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes; 
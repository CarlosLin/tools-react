import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import DialogPage from "./pages/DialogPage";
import AnimationPage from "./pages/RouteAnimationPage";
import "./App.css";
import { AnimatedRoute } from "./components/Animation/AnimatedRoute";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>工具集</h1>
      <div className="feature-buttons">
        <Link to="/dialog" className="btn">
          對話功能
        </Link>
        <Link to="/animation" className="btn">
          動畫功能
        </Link>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dialog" element={<DialogPage />} />
        <Route
          path="/animation"
          element={
            <AnimatedRoute type="fade" duration={1000}>
              <AnimationPage />
            </AnimatedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

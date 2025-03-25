import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>工具演示</h1>
      <div className="menu">
        <Link to="/dialog" className="menu-item">
          对话框演示
        </Link>
        <Link to="/animation" className="menu-item">
          动画演示
        </Link>
        <Link to="/route-animation" className="menu-item">
          路由动画演示
        </Link>
      </div>
    </div>
  );
};

export default Home;

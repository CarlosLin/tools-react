import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RouteAnimationController,
  AnimationType,
} from "../components/Animation/RouteAnimationController";
import "../App.css";

const RouteAnimationPage: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const [animationType, setAnimationType] = useState<AnimationType>("fade");
  const [direction, setDirection] = useState<
    "left" | "right" | "top" | "bottom"
  >("right");
  const [duration, setDuration] = useState(300);

  const animationTypes: AnimationType[] = ["fade", "slide", "zoom", "bounce"];
  const directions: Array<"left" | "right" | "top" | "bottom"> = [
    "left",
    "right",
    "top",
    "bottom",
  ];

  const toggleAnimation = () => {
    setIsActive((prev) => !prev);
  };

  const changeAnimationType = () => {
    const currentIndex = animationTypes.indexOf(animationType);
    const nextIndex = (currentIndex + 1) % animationTypes.length;
    setAnimationType(animationTypes[nextIndex]);
  };

  const changeDirection = () => {
    const currentIndex = directions.indexOf(direction);
    const nextIndex = (currentIndex + 1) % directions.length;
    setDirection(directions[nextIndex]);
  };

  const changeDuration = () => {
    if (duration === 300) {
      setDuration(600);
    } else if (duration === 600) {
      setDuration(1000);
    } else {
      setDuration(300);
    }
  };

  return (
    <div className="route-animation-page">
      <h1>路由动画演示</h1>

      <div className="animation-demo">
        <RouteAnimationController
          type={animationType}
          duration={duration}
          isActive={isActive}
          direction={direction}
        >
          <div className="route-content">
            <h2>路由内容</h2>
            <p>这里是页面内容，将会随着路由变化而产生动画效果。</p>
          </div>
        </RouteAnimationController>

        <div className="animation-controls">
          <button onClick={toggleAnimation}>
            {isActive ? "隐藏内容" : "显示内容"}
          </button>
          <button onClick={changeAnimationType}>
            动画类型: {animationType}
          </button>
          {(animationType === "slide" || animationType === "zoom") && (
            <button onClick={changeDirection}>方向: {direction}</button>
          )}
          <button onClick={changeDuration}>持续时间: {duration}ms</button>
        </div>
      </div>

      <div className="usage-example">
        <h3>使用示例</h3>
        <pre>
          {`// 基本用法
<RouteAnimationController>
  <div>你的内容</div>
</RouteAnimationController>

// 带参数
<RouteAnimationController
  type="${animationType}"
  duration={${duration}}
  direction="${direction}"
>
  <div>你的内容</div>
</RouteAnimationController>

// 路由动画
<Route path="/your-path" element={
  <AnimatedRoute 
    type="${animationType}" 
    duration={${duration}}
    direction="${direction}"
  >
    <YourComponent />
  </AnimatedRoute>
} />`}
        </pre>
      </div>

      <Link to="/" className="btn">
        返回首页
      </Link>
    </div>
  );
};

export default RouteAnimationPage;

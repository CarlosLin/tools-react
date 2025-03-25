import React, { useEffect, useState } from "react";
import {
  RouteAnimationController,
  AnimationType,
} from "./RouteAnimationController";
import { useLocation } from "react-router-dom";

interface AnimatedRouteProps {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  direction?: "left" | "right" | "top" | "bottom";
}

export const AnimatedRoute: React.FC<AnimatedRouteProps> = ({
  children,
  type = "fade",
  duration = 300,
  direction = "right",
}) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  // 當路由變化時，啟用動畫
  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, [location.pathname, location.search, location.hash]);

  return (
    <RouteAnimationController
      key={location.key || location.pathname}
      type={type}
      duration={duration}
      direction={direction}
      isActive={isActive}
    >
      {children}
    </RouteAnimationController>
  );
};

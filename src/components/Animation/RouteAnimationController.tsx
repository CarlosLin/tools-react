import React, { useEffect, useState } from "react";
import "./RouteAnimation.css";

export type AnimationType = "fade" | "slide" | "zoom" | "bounce";

export interface RouteAnimationControllerProps {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  isActive?: boolean;
  direction?: "left" | "right" | "top" | "bottom";
}

export const RouteAnimationController: React.FC<
  RouteAnimationControllerProps
> = ({
  children,
  type = "fade",
  duration = 300,
  isActive = true,
  direction = "right",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  const animationClass = `route-animation-${type}${
    type === "slide" || type === "zoom" ? `-${direction}` : ""
  }`;

  return (
    <div
      className={`route-animation ${animationClass} ${
        isVisible ? "route-animation-enter" : "route-animation-exit"
      }`}
      style={
        {
          "--animation-duration": `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

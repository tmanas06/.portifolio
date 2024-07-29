import React, { useState, useEffect } from "react";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  useEffect(() => {
    const handleHoverElements = () => {
      const hoverElements = document.querySelectorAll("a, button, .hover-effect");

      hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", handleHover);
        element.addEventListener("mouseleave", handleUnhover);
      });

      return () => {
        hoverElements.forEach((element) => {
          element.removeEventListener("mouseenter", handleHover);
          element.removeEventListener("mouseleave", handleUnhover);
        });
      };
    };

    handleHoverElements();
  }, []);

  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="arrow">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L22 12L12 22L2 12L12 2Z"
            fill="none"
            stroke="cyan"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 2L22 12L12 22L2 12L12 2Z"
            fill="none"
            stroke="magenta"
            strokeWidth="2"
            strokeLinejoin="round"
            transform="translate(2,2)"
          />
        </svg>
      </div>
      <div className="ring"></div>
    </div>
  );
};

export default Cursor;

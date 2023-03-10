import React from "react";

const Icon = ({ path, icon }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className={`bi bi-${icon}`}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;

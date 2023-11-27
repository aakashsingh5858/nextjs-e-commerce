import React from "react";

const Loader = ({ size = 12, color = "#f42dad", thickness = 6 }) => {
  const diameter = `${size}rem`;
  const border = `${thickness}px solid ${color}`;
  return (
    <div className="absolute inset-0 z-20 overflow-y-auto">
      <div className="flex items-center bg-gray-900 bg-opacity-50 justify-center min-h-screen p-4">
        <div
          className="animate-spin rounded-full h-full  w-full border-t-4 border-b-4 border-transparent"
          style={{
            borderTop: border,
            borderBottom: border,
            width: diameter,
            height: diameter,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;

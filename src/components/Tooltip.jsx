import React from "react";

function Tooltip({ message, children }) {
  return (
    <div className="group relative flex">
      {children}
      <span className="absolute bottom-11 left-1/2 transform -translate-x-1/2 scale-0 transition-all rounded bg-stone-800 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}

export default Tooltip;

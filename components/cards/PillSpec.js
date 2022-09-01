import React from "react";

export const PillSpec = ({spec}) => {
  return (
    <div>
      <span className="text-xs inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-blue-50 text-black border-dotted border-2 border-blue-800 rounded-md">
        {spec}
      </span>
    </div>
  );
};

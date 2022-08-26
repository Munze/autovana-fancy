import React from "react";

export const PillSpec = ({spec}) => {
  return (
    <div>
      <span className="text-xs inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-green-100 text-green-800 border border-1 border-blue-800 rounded-md">
        {spec}
      </span>
    </div>
  );
};

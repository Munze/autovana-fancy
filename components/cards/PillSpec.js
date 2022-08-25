import React from "react";

export const PillSpec = ({spec}) => {
  return (
    <div>
      <span class="text-xs inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-green-600 text-white rounded-full">
        {spec}
      </span>
    </div>
  );
};

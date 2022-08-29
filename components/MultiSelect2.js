import React, { useState, Component } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated'

const Hotels = [
  { value: 1, label: "Coral Beach Maldives" },
  { value: 2, label: "Ilaa Beach Maldives" },
  { value: 3, label: "Finolhu" },
  { value: 4, label: "Arena" },
  { value: 5, label: "Kaani Beach Hotel" },
];


 export const MultiSelect2=() => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const setHandle = (e, i) => {
    setSelectedOptions(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };
  const animatedComponents = makeAnimated();

  return (
    <div className="mx-auto container py-1 w-[360px]">
      <h1 className="text-sm">Select Hotels</h1>
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        <div className=" px-2	">
          <Select
            options={[
              { value: 1, label: "Coral Beach Maldives" },
              { value: 2, label: "Ilaa Beach Maldives" },
              { value: 3, label: "Finolhu" },
              { value: 4, label: "Arena" },
              { value: 5, label: "Kaani Beach Hotel" },
            ]}
            onChange={setHandle}
            isMulti
            components={animatedComponents}
          />
        </div>
        {/* <div>{selectedOptions}</div> */}
      </div>
    </div>
  );
}

export default MultiSelect2;
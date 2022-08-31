import React, { useState, Component } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated'




 export const MultiSelect2=(props) => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const setHandle = (e, i) => {
    setSelectedOptions(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };
  const animatedComponents = makeAnimated();
  console.log('Selecct ' ,props.options)
  const data = props
  console.log(data.options)
  return (
    <div className="mx-auto container py-1 w-[360px]">
      <h1 className="text-sm ml-3">Brend</h1>
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        <div className="px-2 text-sm">
          <Select
            options={data.options}
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
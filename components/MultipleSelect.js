import React, { useState } from "react";
import { MultiSelect as Select } from "primereact/multiselect";

export const MultipleSelect = ({ options, placeholder, multiple }) => {
  const [value, setValue] = useState(null);
console.log(options);
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <>
      <Select
        optionLabel="make"
        optionValue="make_id"
        placeholder={placeholder}
        maxSelectedLabels={3}
        display="chip"
        value={value}
        options={options}
        onChange={() => handleChange(value)}
      />
    </>
  );
};

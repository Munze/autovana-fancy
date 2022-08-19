import React, { useState } from "react";
import Select from 'react-tailwindcss-select';



export const MultipleSelect = ({options,placeholder, multiple}) => {
  const [value, setValue] = useState(null);

  const handleChange = (value) => {
    console.log("value:", value);
    
    setValue(value);
  };
  return (
    <>
    <Select
        value={value}
        onChange={handleChange}
        options={options}
        isMultiple={multiple===0 ? false : true}
        noOptionsMessage="Nema podudaranja"
        placeholder={placeholder}
        searchInputPlaceholder="Pretraži..."
    />
    </>
);
};

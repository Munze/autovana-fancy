import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

export const SearchInput = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Label */}
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      {/* Icon */}
      <span className="z-20 absolute inset-y-0 left-0 pl-3 inline-flex items-center pointer-events-none">
        <SearchIcon
          className={`h-4 w-4 ${focused ? "text-white" : "text-gray-400"}`}
          aria-hidden="true"
        />
      </span>
      {/* Input */}
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className={`form-input relative z-10 pl-11 w-32 sm:w-full border-none bg-indigo-100 text-xs ${
          focused
            ? "bg-opacity-10 text-white placeholder-gray-200"
            : "bg-opacity-80 placeholder-gray-500"
        } focus:border-transparent focus:ring-0`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {/* Background effect */}
      <span
        className={`absolute top-0 left-0 h-full bg-indigo-600 transition-all duration-300 ease-in transform ${
          focused ? "w-full" : "w-0"
        }`}
        aria-hidden="true"
      />
    </div>
  );
};

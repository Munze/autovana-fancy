import React from "react";
import { useSelector } from 'react-redux'

export const SearchSidebar = () => {
    const  visible  = useSelector((state) => state.searchBar.visible)
    console.log(visible);
  if (visible)
    return (
    <div className="md:invisible">
      <div className="top-0 left-0 w-[90vw] max-w-[480px] bg-green-50 p-5 fixed h-full ">
        <div className="fixed top-10 right-20">
          <button className="">CLOSE</button>
        </div>
        <h2 className="mt-20 text-4xl font-semibold text-blue-600">
          I am a sidebar
        </h2>
      </div> 
    </div>
  );
};

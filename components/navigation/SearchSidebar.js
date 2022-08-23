import React, { useState } from "react";

export const SearchSidebar = (show) => {
  const [showSearchSidebar, setShowSearchSidebar] = useState(show);
console.log('U komponenti ', showSearchSidebar);
  return (
    <div className="md:invisible">
        {!showSearchSidebar ? 
      (<div className="top-0 left-0 w-[90vw] max-w-[480px] bg-green-50 p-5 fixed h-full ">
        <div className="fixed top-10 right-20">
          <button className="">CLOSE</button>
        </div>
        <h2 className="mt-20 text-4xl font-semibold text-blue-600">
          I am a sidebar
        </h2>
      </div> ): <div></div>}
    </div>
  );
};

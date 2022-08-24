import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeVisible } from '../../store/searchSideBarSlice'


export const SearchSidebar = () => {
  const visible = useSelector((state) => state.searchBar.visible);
  const dispatch = useDispatch();

  console.log(visible);
  if (visible)
    return (
      <div className="md:invisible">
        <div className="justify-end top-0 left-0 w-[90vw] max-w-[480px] bg-green-50 p-5 fixed h-full ">
          <h2 className="mt-10 text-4xl font-semibold text-blue-600">
            I am a sidebar
          </h2>
          <div className="right-5 top-5 absolute">
            <p className="cursor-pointer"
            onClick={() =>{dispatch(changeVisible()); console.log(changeVisible);}}
            >X</p>
          </div>
        </div>
      </div>
    );
};

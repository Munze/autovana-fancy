import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible } from "../../store/searchSideBarSlice";

export const SSDB = () => {
  const { visible } = useSelector((store) => store.searchBar);
  const dispatch = useDispatch();

  return (
    <div className="relative w-full">
      {/* :STORE NAVIGATION (SMALL DEVICE) */}
      <div className="md:hidden">
        {/* ::Overlay Background */}
        <div
          className={`z-30 fixed inset-0 w-full h-screen bg-gray-500 bg-opacity-75 ${
            visible ? "visible" : "invisible"
          }`}
        />

        {/* ::Mobile Menu */}
        <div
          className={`z-50 fixed top-0 left-0 lg:inset-0 lg:relative w-full h-full max-h-screen max-w-xs overflow-y-scroll lg:overflow-auto bg-gray-50 transition-all duration-300 ease-in-out transform ${
            visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col">
            {/* :::Close menu button */}
            <span className="pt-3 pb-5 pr-3 flex justify-end">
              <button
                className="text-gray-500 hover:text-indigo-600"
                onClick={() => dispatch(changeVisible())}
              >
                <XIcon className="w-7 h-7" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { SearchSidebar } from "./SearchSidebar";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible as changeSearch } from "../../store/searchSideBarSlice";
import { changeVisible as changeMenu } from '../../store/menuOpenSlice'
import { SSDB } from "./SSDB";

export const BottomNav = () => {
  const { visible } = useSelector((store) => store.searchBar);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen ">
      <section
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-50 bg-white shadow mb-0.5"
      >
        <div id="tabs" className="flex justify-between items-baseline">
            {/* # Home */}
          <a
            href="/"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="inline-block mb-1 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span className="tab tab-home block text-xs"></span>
          </a>
          {/* # Menu */}
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            onClick={() => {
                dispatch(changeMenu());
              }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="inline-block mb-1 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
              />
            </svg>

            <span className="tab tab-kategori block text-xs"></span>
          </a>
          {/* # Search */}
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center -pt-2 pb-1"
            onClick={() => {
              dispatch(changeSearch());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="inline-block  w-9 h-9"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="tab tab-explore block text-xs"></span>
          </a>
          {/* # Favorites */}
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="inline-block mb-1 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <span className="tab tab-whishlist block text-xs">
             
            </span>
          </a>
          {/* # Profile */}
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="inline-block mb-1 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <span className="tab tab-account block text-xs"></span>
          </a>
        </div>
      </section>

      <SSDB />
    </div>
  );
};

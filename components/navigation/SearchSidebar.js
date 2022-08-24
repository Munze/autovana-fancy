import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeVisible } from "../../store/searchSideBarSlice";

export const SearchSidebar = () => {
  const visible = useSelector((state) => state.searchBar.visible);
  const dispatch = useDispatch();

  if (visible)
    return (
      <aside className={"ease-in-out duration-300 md:invisible"}>
        <div
          className={`justify-end top-0 left-0 w-[90vw] max-w-[480px] bg-green-50 p-5 fixed h-full `}
        >
          <h2 className="mt-10 text-4xl font-semibold text-blue-600">
            I am a sidebar
          </h2>
          <div className="right-5 top-5 absolute">
            <div
              className="cursor-pointer w-9"
              onClick={() => {
                dispatch(changeVisible());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m-15 0l15 15"
                />
              </svg>
            </div>
          </div>
        </div>
      </aside>
    );
};

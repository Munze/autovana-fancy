import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import {
  KeyIcon,
  LoginIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import SearchInput from "../search/SearchInput";

const signedIn = false;

const navigation = {
  pages: [
    { name: "Novo!", href: "#link" },
    { name: "Za agencije", href: "/agencije-cene" },
    { name: "Krediti", href: "#link" },
    { name: "Kontakt", href: "#link" },
  ],
  categories: [
    {
      id: "automobili",
      name: "Automobili",
      sections: [
        { name: "SVI", href: "#" },
        { name: "Sedan", href: "#link" },
        { name: "Karavan", href: "#link" },
        { name: "Kupe", href: "#link" },
        { name: "SUV", href: "#" },
        { name: "Sportski", href: "#" },
        { name: "Kabrio", href: "#" },
        { name: "Odtimer", href: "#link" },
      ],
    },
    {
      id: "motocikli",
      name: "Motocikli",
      sections: [
        { name: "SVI", href: "#link" },
        { name: "ATV/Quad", href: "#link" },
        { name: "Chopper / Cruiser", href: "#link" },
        { name: "Enduro / Cross", href: "#link" },
        { name: "Moped", href: "#link" },
        { name: "Mini bike", href: "#link" },
        { name: "Naked", href: "#link" },
        { name: "Scooter", href: "#link" },
        { name: "Sport / Super sport", href: "#link" },
        { name: "Touring", href: "#link" },
        { name: "Combination / Sidecar", href: "#link" },
        { name: "Električni motocikl", href: "#link" },
      ],
    },
  ],
};

export const HeaderNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Automobili");
  return (
    <div className="relative w-full">
      {/* :STORE NAVIGATION (SMALL DEVICE) */}
      <div className="md:hidden">
        {/* ::Overlay Background */}
        <div
          className={`z-30 fixed inset-0 w-full h-screen bg-gray-500 bg-opacity-75 ${
            isMenuOpen ? "visible" : "invisible"
          }`}
        />

        {/* ::Mobile Menu */}
        <div
          className={`z-50 fixed top-0 left-0 lg:inset-0 lg:relative w-full h-full max-h-screen max-w-xs overflow-y-scroll lg:overflow-auto bg-gray-50 transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col">
            {/* :::Close menu button */}
            <span className="pt-3 pb-5 pr-3 flex justify-end">
              <button
                className="text-gray-500 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <XIcon className="w-7 h-7" />
              </button>
            </span>
            {/* :::Tab button */}
            <div className="grid grid-cols-2 gap-x-4 border-b-2 border-gray-100">
              {navigation.categories.map((category) => (
                <button
                  key={category.id}
                  className={`col-span-1 py-3 px-4 ${
                    category.id === activeTab
                      ? "border-b-2 border-[#1E34E0] text-[#1E34E0]"
                      : "text-gray-500"
                  } text-center text-lg  font-semibold`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            {/* :::Tab content */}
            <div className="py-8 px-4 flex flex-col">
              {navigation.categories
                .filter((category) => category.id === activeTab)
                .map((category) => (
                  <div
                    key={category.id}
                    className="grid grid-cols-2 gap-x-2 gap-y-4"
                  >
                    {category.sections.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`py-1 px-3 text-base ${
                          index === 0
                            ? "text-[#1E34E0]"
                            : "text-gray-500 hover:text-[#1E34E0]"
                        } font-semibold hover:underline`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
            </div>
            {/* :::Company infos */}
            <div className="py-5 px-4 flex flex-col space-y-2 border-t-2">
              {navigation.pages.map((page) => (
                <a
                  key={page.href}
                  href={page.href}
                  className="py-1 px-4 rounded-md text-base text-gray-700 font-semibold tracking-wide hover:bg-[#041594] hover:text-white"
                >
                  {page.name}
                </a>
              ))}
            </div>
            {/* :::Sign In / Sign Up */}
            <div className="py-5 px-4 flex flex-col space-y-2 border-t-2">
              <a
                href="#link"
                className="py-1 px-4 inline-flex items-center rounded-md text-base text-gray-700 font-semibold tracking-wide hover:bg-[#1E34E0] hover:text-white"
              >
                <LoginIcon className="mr-2 w-5 h-5" />
                Prijava
              </a>
              <a
                href="#link"
                className="py-1 px-4 inline-flex items-center rounded-md text-base text-gray-700 font-semibold tracking-wide hover:bg-[#1E34E0] hover:text-white"
              >
                <KeyIcon className="mr-2 w-5 h-5" />
                Registracija
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* :STORE NAVIGATION */}
      <header className="relative">
        {/* ::Top Header */}
        {!signedIn ? (
          <div className="relative py-2 px-4 w-full flex justify-between items-center bg-gray-100 text-gray-700">
            {/* :::Currency select */}
            <div>
              <label htmlFor="language" className="sr-only">
                Odaberite valutu
              </label>
              <select
                name="language"
                id="language"
                className="form-select bg-gray-100 border-none text-sm font-bold text-gray-700 outline-none cursor-pointer focus:ring-0"
              >
                <option value="english">EUR</option>
                <option value="french">RSD</option>
                <option value="spanish">USD</option>
              </select>
            </div>
            {/* :::Promo text */}
            <p className="hidden md:block lg:absolute lg:top-1/2 lg:left-1/2 text-sm text-gray-700 font-semibold transform lg:-translate-y-1/2 lg:-translate-x-1/2">
              Registrujte se na{" "}
              <span className="font-bold text-green-600">autovana.rs</span> i
              budite obavešteni!
            </p>
            {/* :::SignIn/SignUp & Search bar */}
            <div className="inline-flex items-center">
              <p className="mr-4 text-sm text-gray-500">
                <a
                  href="#goToSignin"
                  className="mr-2 text-gray-500 font-semibold hover:text-gray-700 hover:underline"
                >
                  <span className="hidden sm:inline">Prijava</span>
                  <LoginIcon className="inline sm:hidden w-6 h-6" />
                </a>
                <span> | </span>
                <a
                  href="#goToSignUp"
                  className="ml-2 text-gray-500 font-semibold hover:text-gray-700 hover:underline"
                >
                  <span className="hidden sm:inline">Registracija</span>
                  <KeyIcon className="inline sm:hidden w-6 h-6" />
                </a>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* ::Main Menu */}
        <div className="relative py-4 px-4 bg-[#1E34E0]">
          <div className="mx-auto max-w-[1480px] flex justify-between items-center">
            {/* Container */}
            <div className="flex items-center space-x-4">
              {/* :::Site logo & Burger icon */}
              <div className="flex items-center">
                {/* ::::burger button (small device) */}
                <button
                  className="md:hidden mr-4 text-indigo-200 hover:text-white"
                  aria-label="open navigation menu"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <MenuIcon className="w-8 h-8" />
                </button>
                {/* ::::logo  */}
                <a
                  href="/"
                  className="inline-flex justify-center items-center mb-1.5 text-white"
                >
                  {/* <p className="font-bold text-2xl mr-2">autovana</p> */}
                  <div
                    className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center text-transparent text-4xl sm:text-3xl font-extrabold tracking-wide antialiased bg-yellow-300"
                    // style={{
                    //   backgroundImage:
                    //     "url(https://media4.giphy.com/media/twQYPSiVdcq3s2KFyo/giphy.gif?cid=ecf05e474t4sguptmtct4esiiaus9zujaoj8af82iuavfrev&rid=giphy.gif&ct=g)",
                    // }}
                  >
                    autovana.
                  </div>
                </a>
              </div>
              {/* :::Navigation */}
              <nav aria-label="navigation menu">
                <Popover.Group className="hidden md:block">
                  <ul className="flex items-center space-x-10 text-base text-indigo-100 font-medium">
                    {/* :::Dropdown categories */}
                    {navigation.categories.map((category) => (
                      <li key={category.id} className="group">
                        <Popover>
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={`inline-flex items-baseline ${
                                  open ? "text-white" : "group-hover:text-white"
                                }`}
                              >
                                {category.name}
                                <svg
                                  className={`ml-1.5 w-2.5 h-2.5 ${
                                    open
                                      ? "text-white"
                                      : "text-indigo-100 group-hover:text-white"
                                  } fill-current`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 21l-12-18h24z" />
                                </svg>
                              </Popover.Button>
                              {/* :::Flyout menu */}
                              <Popover.Panel
                                className={`absolute top-full left-0 py-3 px-5 w-full flex justify-start shadow-sm bg-white`}
                              >
                                <ul className="mx-auto w-full max-w-5xl flex">
                                  {category.sections.map((section, index) => (
                                    <li
                                      key={section.name}
                                      className={`${
                                        index !== 0 &&
                                        "border-l-2 border-gray-200"
                                      }`}
                                    >
                                      <a
                                        href={section.href}
                                        className={`py-3 px-4 text-sm ${
                                          index === 0
                                            ? "text-[#1E34E0] uppercase"
                                            : "text-gray-500"
                                        } font-semibold whitespace-nowrap hover:text-[#1E34E0]`}
                                      >
                                        {section.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </Popover.Panel>
                            </>
                          )}
                        </Popover>
                      </li>
                    ))}
                    {/* :::Regular pages */}
                    {navigation.pages.map((page) => (
                      <li key={page.name}>
                        <a href={page.href} className="hover:text-white">
                          {page.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Popover.Group>
              </nav>
            </div>

            {/* :::Avatar & Cart */}
            <div className="inline-flex">
              {/* ::::user avatar */}
              {signedIn ? (
                <a
                  href="#gotoUserAccount"
                  className="px-4  border-indigo-200 text-indigo-200 hover:text-white"
                >
                  <UserIcon className="w-6 h-6" />
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

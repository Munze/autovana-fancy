import { KeyIcon, LoginIcon } from "@heroicons/react/outline";
import React from "react";

const signedIn = true;
// comment
export const TopHeader = () => {
  return (
    <div>
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
              <option className="" value="eur">EUR</option>
              <option value="rsd">RSD</option>
              <option value="usd">USD</option>
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
    </div>
  );
};

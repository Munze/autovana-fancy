import React from "react";
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { PillSpec } from "./PillSpec";
export const Card = () => {
  return (
    // <Link
    // href="/oglasi/1232"
    // >
      <Link href="/oglasi/123">
        <div className=" my-2 rounded-lg shadow-md shadow-gray-100 border border-gray-100 bg-white  cursor-pointer w-[90%] mx-auto md:w-[95%] md:my-1">
          <div className="container ">
            <div className="shadow-sm ">
              <Image
                src="/img/6.webp"
                width="100%"
                height="75%"
                objectFit="contain"
                layout="responsive"
                className="rounded-t-lg"
              />
            </div>
          </div>
          <div className="my-2 mx-1">
            <h3 className="text-[1.1rem] font-semibold text-gray-600 line-clamp-1 tracking-tight ">
              Toyota Auris 1,8 HSD 5-TG. EDITION45
            </h3>{" "}
          </div>
          <div className="flex flex-wrap space-x-1 justify-items-end mx-2">
            <PillSpec spec="2014" />
            <PillSpec spec="123.450 km" />
          </div>
          <hr className="mx-2 my-2"/>
          <div className="grid grid-cols-1 justify-items-end">
            <div className="font-bold text-2xl py-1 pr-3 proportional-nums">2.400 &euro; </div>
          </div>
        </div>
      </Link>
    // </Link>
  );
};

import React from "react";
import Carusel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { PillSpec } from "./PillSpec";
export const Card = () => {
  return (
    <div className="relative max-h-[400px] m-1 p-1 rounded-md shadow-md hover:shadow-green-400 hover:shadow-md">
      <div className="h-[180px] bg-slate-700">
        <Image
          src="/img/7.webp"
          width="100%"
          height="75%"
          objectFit="contain"
          layout="responsive"
        />
      </div>
      <div className="">
        {" "}
        <h3 className="text-md font-semibold text-blue-600 line-clamp-2 tracking-tight ">
          Toyota Auris 1,8 HSD 5-TG. EDITION45
        </h3>{" "}
      </div>
      <div className="flex flex-wrap space-x-1">
        <PillSpec spec="Dizel" />
        <PillSpec spec="Manuelni" />
        <PillSpec spec="123.450 km" />
      </div>
      <div className="grid grid-cols-1 justify-items-end">
        <div className="font-bold text-xl pt-3 pr-3 proportional-nums">2.400</div>
      </div>
      <div className="grid grid-cols-2 p-1 items-center justify-self-start">
        <div className="font-bold text-xs italic ">
          <p className="line-clamp-1">Imperial Auto</p>
        </div>
        <div className="justify-self-end">
          <Image src="/img/Lada-Logo.png" height="30px" width="60px" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";
import React, { useState } from "react";

export const Landing = () => {
  const [techOrArts, settechOrArts] = useState(0);

  return (
    <div className="text-[#E9F8E8] ">
      <div className="Wrapper ">
        {/* Hero Image  */}
        <div className="  grid grid-cols-5 grid-rows-2 gap-8  max-h-screen">
          <div className="col-start-1 col-span-3">
            <Image
              className="w-[100%] h-[100%] grayscale hover:grayscale-0"
              src={"/filler.jpeg"}
              width={500}
              height={1000}
            ></Image>
          </div>
          <div className="col-start-4 col-span-2">
            <Image
              className="w-[100%] h-[100%] opacity-80"
              src={"/filler.jpeg"}
              width={1000}
              height={1000}
            ></Image>
          </div>
          <div className="col-start-1 col-span-2">
            <Image
              className="w-[100%] h-[100%] opacity-80"
              src={"/filler.jpeg"}
              width={1000}
              height={1000}
            ></Image>
          </div>

          <div className="col-start-3 col-span-2">
            <Image
              className="w-[100%] h-[100%] opacity-80"
              src={"/filler.jpeg"}
              width={1000}
              height={1000}
            ></Image>
          </div>
          <div className="col-start-5 col-span-1">
            <Image
              className="w-[100%] h-[100%] opacity-80"
              src={"/filler.jpeg"}
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>

        {/* Hero Text  */}

        <div className="HeroText min-h-screen absolute z-10 top-0 left-1/2 right-1/2 bg-no-repeat bg-cover bg-center   flex flex-col justify-center items-center">
          <div className="opacity-100">
            <h1 className="HeroTextMain text-[#435856] text-[18rem] font-extrabold uppercase stroke-slate-50 li ">
              Shreshta
            </h1>
            <div className="flex justify-between">
              <h1 className="HeroTextMain text-[#435856] text-[18rem] font-extrabold uppercase stroke-slate-50 leading-6 ">
                2024
              </h1>
              <h3 className="font-mono uppercase text-[4rem] mr-5 text-right leading-5">
                An initiative by <br /> <br />
                <br /> <p className="">Muthoot Institute</p>
              </h3>
            </div>
          </div>
        </div>

        {/* flowing button */}
        <div className="flex justify-center">
          <div className="w-96 h-20 rounded-full z-10 backdrop-blur-md bg-white/40  absolute bottom-2">
            <div className="w-[100%] h-[100%] px-5 text-2xl font-semibold flex justify-between items-center">
              <div
                className={` w-[50%] h-[70%] ${
                  techOrArts == 0 ? "bg-[#435856] text-white" : "text-black"
                }     rounded-full flex justify-center items-center font-mono uppercase cursor-pointer transition-all`}
                onClick={() => settechOrArts(0)}
              >
                Tech fest
              </div>
              <div
                className={` w-[50%] h-[70%] ${
                  techOrArts == 1 ? "bg-[#435856] text-white" : "text-black"
                }     rounded-full flex justify-center items-center font-mono uppercase cursor-pointer transition-all`}
                onClick={() => settechOrArts(1)}
              >
                art fest
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

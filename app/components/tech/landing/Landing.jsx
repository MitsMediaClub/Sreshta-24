"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const Landing = () => {
  const [techOrArts, settechOrArts] = useState(0);
  const cursor = useRef();

  const cursorset = (e) => {
    cursor.current.style.top = e.pageY + "px";
    cursor.current.style.left = e.pageX + "px";
  };
  window.addEventListener("mousemove", cursorset);

  return (
    <div className="text-[#E9F8E8] cursor-none overflow-x-hidden  ">
      <div className="absolute h-screen w-screen top-0 left-0 right-0 z-20 MAIN"></div>

      {/* cursor */}
      <div
        ref={cursor}
        className="customcursor w-[300px] h-[300px] 
      border-solid border-3 border-black 
      absolute translate-x-[-50%] 
      translate-y-[-50%] z-50 rounded-full bg-transparent"
      ></div>
      <div className="Wrapper ">
        {/* Hero Image  */}
        <div className=" h-screen">
          <div className="flex flex-col gap-5 h-full">
            <div className="flex gap-5 h-full">
              <Image
                width={1000}
                height={1000}
                src="/filler.jpeg"
                alt="Meh"
                className="w-1/2"
              />
              <Image
                width={1000}
                height={1000}
                src="/filler.jpeg"
                alt="Meh"
                className="w-1/2"
              />
            </div>
            <div className="flex gap-5 h-full">
              <Image
                width={1000}
                height={1000}
                src="/filler.jpeg"
                alt="Meh"
                className="w-[40%]"
              />
              <Image
                width={1000}
                height={1000}
                src="/filler.jpeg"
                alt="Meh"
                className="w-[40%]"
              />
              <Image
                width={1000}
                height={1000}
                src="/filler.jpeg"
                alt="Meh"
                className="w-[20%]"
              />
            </div>
          </div>
        </div>

        {/* Hero Text  */}

        <div className="HeroText min-h-screen w-screen absolute z-10 top-0 bg-no-repeat   flex flex-col justify-center items-center">
          <div className="opacity-100 flex justify-center items-center">
            <Image
              className=" "
              src={"/tech/Titles.png"}
              width={1000}
              height={1000}
            ></Image>
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

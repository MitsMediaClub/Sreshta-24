"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const Landing = () => {
  const [techOrArts, settechOrArts] = useState(0);

  const cursor = useRef();

  const cursorset = (e) => {
    // cursor.current.style.top = e.pageY + "px";
    // cursor.current.style.left = e.pageX + "px";
    cursor.current.style.webkitMaskPosition = `${e.pageX}px ${e.pageY}px`;
  };
  window.addEventListener("mousemove", cursorset);

  return (
    <div className="text-[#E9F8E8] cursor-none  overflow-x-hidden  ">
      <div className="Wrapper z-20 grayscale">
        {/* Hero Image  */}
        <div className=" h-screen">
          <div className="flex flex-col gap-5 h-full">
            <div className="flex gap-5 h-1/2">
              <Image
                width={1000}
                height={1000}
                src="/tech/img1.png"
                alt="Meh"
                className="w-1/2 object-cover object-left-top"
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img2.png"
                alt="Meh"
                className="w-1/2 object-cover object-top"
              />
            </div>
            <div className="flex gap-5 h-1/2">
              <Image
                width={1000}
                height={1000}
                src="/tech/img3.png"
                alt="Meh"
                className="w-[40%] object-cover object-left-top"
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img4.png"
                alt="Meh"
                className="w-[40%] object-cover object-top"
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img5.png"
                alt="Meh"
                className="w-[20%] object-cover "
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
        {/* <div className="flex justify-center grayscale-0">
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
        </div> */}
      </div>

      {/* Gray Scaled Wrapper */}
      {/* ------------------------------------------------------------ */}
      <div
        ref={cursor}
        className="Wrapper absolute top-0  left-0 right-0 bottom-0  z-0 mask"
      >
        {/* Hero Image  */}
        <div className=" h-screen">
          <div className="flex flex-col gap-5 h-full">
            <div className="flex gap-5 h-1/2">
              <Image
                width={1000}
                height={1000}
                src="/tech/img1.png"
                alt="Meh"
                className="w-1/2 object-cover object-left-top"
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img2.png"
                alt="Meh"
                className="w-1/2 object-cover object-top"
              />
            </div>
            <div className="flex gap-5 h-1/2">
              <Image
                width={1000}
                height={1000}
                src="/tech/img3.png"
                alt="Meh"
                className="w-[40%] object-cover object-left-top"
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img4.png"
                alt="Meh"
                className="w-[40%] object-cover object-top"
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img5.png"
                alt="Meh"
                className="w-[20%] object-cover "
              />
            </div>
          </div>
        </div>
        Hero Text
        <div className="HeroText min-h-screen w-screen absolute z-10 top-0  bg-no-repeat   flex flex-col justify-center items-center">
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
        {/* <div className="flex justify-center">
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
        </div> */}
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import FloatButton from "../FloatButton";

export const Landing = () => {
  const [techOrArts, settechOrArts] = useState(0);
  const size = 1400;
  const cursor = useRef();
  const landingRef = useRef(null);
  useEffect(() => {
    const cursorset = (e) => {
      const rect = landingRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursor.current.style.webkitMaskPosition = `${x - size / 2}px ${
        y - size / 2
      }px`;
    };
    landingRef.current.addEventListener("mousemove", cursorset);
  }, []);

  return (
    <div
      className="text-[#E9F8E8] overflow-x-hidden  relative w-full min-h-screen"
      ref={landingRef}
    >
      <div className="relative">
        <div className="HeroText absolute z-10 top-0 left-0 bg-no-repeat h-full w-full flex flex-col justify-center items-center">
          <Image
            className=" animate-wiggle xl:w-auto xl:h-auto w-[50vw] h-auto"
            src={"/tech/Titles.png"}
            width={800}
            height={800}
          ></Image>
        </div>
        <div className="grayscale Wrapper1">
          {/* Hero Image  */}
          <div className="relative ">
            <Image
              width={10000}
              height={10000}
              src="/landing/landingImage.png"
              alt="Meh"
              className="w-screen "
            />

            {/* Hero Text  */}
          </div>
        </div>
      </div>

      {/* Gray Scaled Wrapper */}
      {/* ------------------------------------------------------------ */}
      <div
        ref={cursor}
        className="Wrapper2 absolute top-0  left-0  z-0 mask h-full w-full overflow-hidden"
      >
        {/* Hero Image  */}
        <div className="h-full relative">
          <Image
            width={10000}
            height={10000}
            src="/landing/landingImage.png"
            alt="Meh"
            className="w-screen "
          />

          <div className="HeroText h-full w-full absolute z-10 top-0 left-0  bg-no-repeat   flex flex-col justify-center items-center ">
            <div className="opacity-100 flex justify-center items-center">
              {/* <Image
                className=" "
                src={"/tech/Titles.png"}
                width={800}
                height={800}
              ></Image> */}
            </div>
          </div>
        </div>
      </div>
      {/* <FloatButton></FloatButton> */}
    </div>
  );
};

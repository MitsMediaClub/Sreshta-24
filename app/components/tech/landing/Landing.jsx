"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const Landing = () => {
  const [techOrArts, settechOrArts] = useState(0);
  const size = 400;
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

    const handleMouseEnter = (e) => {
      landingRef.current.addEventListener("mousemove", cursorset);
    };

    const handleMouseLeave = () => {
      landingRef.current.removeEventListener("mousemove", cursorset);
    };

    landingRef.current.addEventListener("mouseenter", handleMouseEnter);
    landingRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Clean up the event listeners when the component unmounts
  }, []);

  return (
    <div
      className="text-[#E9F8E8] overflow-x-hidden  relative w-full min-h-screem"
      ref={landingRef}
    >
      <div className="grayscale Wrapper1  overflow-hidden">
        {/* Hero Image  */}
        <div className=" h-screen relative">
          <div className="flex flex-col gap-5 h-full">
            <div className="flex gap-5 h-1/2">
              <Image
                width={1000}
                height={1000}
                src="/tech/img1.png"
                alt="Meh"
                className=""
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img2.png"
                alt="Meh"
                className=""
              />
            </div>
            <div className="flex gap-5 h-1/2">
              <Image
                width={1000}
                height={1000}
                src="/tech/img3.png"
                alt="Meh"
                className=""
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img4.png"
                alt="Meh"
                className=""
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img5.png"
                alt="Meh"
                className=" "
              />
            </div>
          </div>

          {/* Hero Text  */}

          <div className="HeroText absolute z-10 top-0 left-0 bg-no-repeat h-full w-full flex flex-col justify-center items-center">
            <Image
              className=" "
              src={"/tech/Titles.png"}
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
      </div>

      {/* Gray Scaled Wrapper */}
      {/* ------------------------------------------------------------ */}
      <div
        ref={cursor}
        className="Wrapper2 ease-out duration-75 absolute top-0  left-0  z-0 mask h-full w-full overflow-hidden"
      >
        {/* Hero Image  */}
        <div className="h-full relative">
          <div className="flex flex-col gap-5 h-full">
            <div className="flex gap-5 h-1/2">
              <Image
                width={1000}
                height={1000}
                src="/tech/img1.png"
                alt="Meh"
                className=""
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img2.png"
                alt="Meh"
                className=" "
              />
            </div>
            <div className="flex gap-5 h-1/2">
              <Image
                width={1000}
                height={1000}
                src="/tech/img3.png"
                alt="Meh"
                className=""
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img4.png"
                alt="Meh"
                className=""
              />
              <Image
                width={1000}
                height={1000}
                src="/tech/img5.png"
                alt="Meh"
                className=" "
              />
            </div>
          </div>

          <div className="HeroText h-full w-full absolute z-10 top-0 left-0  bg-no-repeat   flex flex-col justify-center items-center">
            <div className="opacity-100 flex justify-center items-center">
              <Image
                className=" "
                src={"/tech/Titles.png"}
                width={1000}
                height={1000}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

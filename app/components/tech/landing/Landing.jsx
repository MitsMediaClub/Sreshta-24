"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import FloatButton from "../FloatButton";
import "../../common/Navbar.css";

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

  const ref = useRef();

  const hamburger = () => {
    document.getElementById("burger").style.display = "none";
    document.getElementById("close").style.display = "flex";
    ref.current.style.bottom = "0%";
  };
  const navClose = () => {
    document.getElementById("burger").style.display = "flex";
    document.getElementById("close").style.display = "none";
    ref.current.style.bottom = "100%";
  };

  return (
    <>
      <nav>
        <div
          className="absolute bottom-[100%] z-40 bg-slate-200 duration-1000"
          id="nav-main"
          ref={ref}
        >
          <div className="text-[3rem] font-[nav-font] flex flex-col items-center justify-evenly w-screen h-[100vh] pt-[5vw]">
            <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]">
              Home
            </span>
            <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]">
              Events
            </span>
            <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]">
              Gallery
            </span>
            <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]">
              About
            </span>
            <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] mb-[13vh]">
              Contact
            </span>
          </div>
          <FloatButton />
        </div>
      </nav>
      <div
        className="text-[#E9F8E8] overflow-x-hidden  relative w-full min-h-screen"
        ref={landingRef}
      >
        <div className="absolute top-0 left-0 right-0 z-40 w-full  ">
          <div className="flex flex-row justify-between  2xl:mx-16 xl:mx-[3.5rem] lg:mx-[3rem] mx-6 ">
            <div
              className={` LPICON  bg-tech-bg 2xl:w-auto bg-clip-padding border
          
          xl:border-b-[8px] xl:border-r-[8px] xl:border-l-[8px] xl:border-t-0
          lg:border-b-[5px] lg:border-r-[5px] lg:border-l-[5px] lg:border-t-0
          border-b-[3px] border-r-[3px] border-l-[3px] border-t-0
          
          border-tech-bg   xl:w-[8rem] lg:w-[6rem]  w-[5rem]`}
            >
              <Image
                className=" w-full"
                src={"/landing/s_logo.png"}
                width={800}
                height={800}
                alt=""
              ></Image>
            </div>
            <div
              className={` LPICON cursor-pointer bg-tech-bg 2xl:w-auto bg-clip-padding border
           
            
            border-b-[8px] border-r-[8px] border-l-[8px] border-t-0
          
          border-tech-bg   xl:w-[8rem] lg:w-[6rem]  w-[5rem]`}
            >
              <Image
                onClick={hamburger}
                className="w-full hover:scale-110 transition-all duration-100 ease-in-out"
                id="burger"
                src={"/landing/ham.png"}
                width={900}
                height={900}
                alt=""
              ></Image>

              <div>
                <h1
                  className="hidden text-black text-[4vw] ml-[2vw]"
                  id="close"
                  onClick={navClose}
                >
                  X
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="HeroText absolute z-10 top-0 left-0 bg-no-repeat h-full w-full flex flex-col justify-center items-center">
            <Image
              className=" animate-wiggle xl:w-auto xl:h-auto w-[50vw] h-auto"
              src={"/tech/Titles.png"}
              width={800}
              height={800}
              alt="Main Comic"
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
    </>
  );
};

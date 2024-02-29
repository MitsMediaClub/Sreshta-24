"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const ref = useRef();

  const [show, setShow] = useState(true);
  const hamburger = () => {
    document.getElementById("burger").style.display = "none";
    document.getElementById("close").style.display = "flex";
    ref.current.style.bottom = "0%";
    document.body.style.overflow = "hidden";
    setShow(false);
  };

  const navClose = () => {
    document.getElementById("burger").style.display = "flex";
    document.getElementById("close").style.display = "none";
    ref.current.style.bottom = "100%";
    document.body.style.overflow = "auto";
    setShow(true);
  };

  return (
    <main className="h-full overflow-x-hidden bg-tech-bg">
      <nav className="md:block hidden">
        <div
          className="absolute bottom-[100%] z-40 bg-slate-200 duration-1000"
          id="nav-main"
          ref={ref}
        >
          <div className="text-[3rem] font-[nav-font] flex flex-col items-center justify-evenly w-screen h-[100vh] ">
            <Link
              href="/"
              className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`md:block hidden absolute h-4 pt-4 top-0 left-0 right-0 z-40 w-full  `}
      >
        <div className="flex flex-row justify-between  2xl:mx-16 xl:mx-[3.5rem]  lg:mx-[3rem] mx-6 ">
          <div
            className={`${
              show
                ? " 2xl:w-auto bg-clip-padding  border-tech-bg  xl:w-[8rem] lg:w-[6rem] delay-700"
                : ""
            }  w-[5rem] flex justify-center items-center `}
          >
            <Link href="/">
              <Image
                className={` w-full ${
                  show ? "visible delay-700" : "invisible"
                } `}
                src={"/landing/s_logo.png"}
                width={800}
                height={800}
                alt=""
              ></Image>
            </Link>
          </div>
          <div
            className={` cursor-pointer ${
              show ? " 2xl:w-auto bg-clip-padding  border-tech-bg" : ""
            }   xl:w-[8rem] lg:w-[6rem]  w-[5rem]`}
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
      {/* <Navbar /> */}
    </main>
  );
}

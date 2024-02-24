"use client";
import Image from "next/image";
import Cards from "./Cards";
import React, { useEffect, useRef, useState } from "react";
import FloatButton from "../components/tech/FloatButton.jsx";
import Navbar from "../components/common/Navbar";
import mediaClub from "./data/mediaClub.json";
import studentCouncil from "./data/studentCouncil.json";
import webTeam from "./data/leadwebTeam.json";
import juniorwebTeam from "./data/subweb.json";
import Link from "next/link";
import Footer from "../components/common/Footer";
import Specials from "./Specials";
import specialsX from "./data/specials.json";

export default function AboutPage() {
  const ref = useRef();

  const [show, setShow] = useState(true);
  const hamburger = () => {
    document.getElementById("burger").style.display = "none";
    document.getElementById("close").style.display = "flex";
    ref.current.style.bottom = "0%";
    setShow(false);
  };

  const navClose = () => {
    document.getElementById("burger").style.display = "flex";
    document.getElementById("close").style.display = "none";
    ref.current.style.bottom = "100%";
    setShow(true);
  };

  return (
    <main className="h-full overflow-x-hidden bg-tech-bg">
      <div className="bg-texture bg-no-repeat snap-center w-screen md:min-h-screen">
        <nav className="md:block hidden">
          <div
            className="absolute bottom-[100%] z-40 bg-slate-200 duration-1000"
            id="nav-main"
            ref={ref}
          >
            <div className="text-[3rem] font-[nav-font] flex flex-col items-center justify-evenly w-screen h-[100vh] ">
              <Link
                href="/"
                className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]"
              >
                Home
              </Link>
              <Link
                href="/events"
                className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]"
              >
                Events
              </Link>
              <Link
                href="/gallery"
                className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]"
              >
                FAQ
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
        <div>
          <p className="w-full text-white h-1/2 bangers font-normal md:text-xxxl text-9xl items-center drop-shadow-title text-center self-center p-24">
            OUR TEAM
          </p>
          <p className="w-full h-1/4 gooddog text-black self-center text-3xl text-center">
            The Heroes, the Legends, the Myths
          </p>
          <Image
            src="/assets/about/bg-overlay.png"
            width={1898}
            height={1000}
            alt="BG Overlay"
          />
        </div>
      </div>
      {/* Cards Call*/}
      <div className="">
      <div className="pt-12">
          <div className="w-full h-1/5 bangers text-6xl self-center text-center text-[#285F5F]">
            WEB TEAM
          </div>
          <Cards data={webTeam} />
          <Cards data={juniorwebTeam} />
        </div>
        <div className="pt-12">
          <div className="w-full h-1/5 bangers text-6xl self-center text-center text-[#285F5F]">
            STUDENT COUNCIL
          </div>
          <Cards data={studentCouncil} />
        </div>
        <div className="pt-12">
          <div className="w-full h-1/5 bangers text-6xl self-center text-center text-[#285F5F]">
            MEDIA CLUB
          </div>
          <Cards data={mediaClub} />
        </div>
      </div>
      {/*<div className=" mx-12 pt-12 flex gap-12">
          <div className=" h-1/5 bangers whitespace-nowrap text-3xl self-center text-[#285F5F]">
            Special Mention
          </div>
          <Specials data={specialsX} />
            </div>*/}
      {/*Footer :- For the Sake of the Aesthetics */}
      {/* <div className='flex items-center justify-between p-16'>
                <div className='flex items-center'>
                    <Image
                        src='/assets/nav/Shreshta.png'
                        width={100}
                        height={100}
                        alt='Shreshta Logo' />
                    <div className='bangers text-6xl text-[#285F5F]'>SHRESHTA</div>
                </div>
                <div className='gooddog text-4xl text-[#285F5F]'>© 2024 MITS. All rights reserved.</div>
            </div> */}
            
    </main>
  );
}

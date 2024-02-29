"use client";
import Image from "next/image";
import Cards from "./Cards";
import React, { useEffect, useRef, useState } from "react";
import FloatButton from "../components/tech/FloatButton.jsx";
import NavbarNew from "../components/common/NavbarNew";
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
        <NavbarNew />
          {/* <Navbar /> */}
        <div className="pt-32">
          <p className="w-full text-white h-1/2 bangers font-normal md:text-xxxl text-9xl items-center drop-shadow-title text-center self-center p-24">
            OUR TEAM
          </p>
          <p className="w-full h-1/4 dog text-black self-center text-3xl text-center">
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
            STUDENT COUNCIL
          </div>
          <Cards data={studentCouncil} />
        </div>
        <div className="pt-12">
          <div className="w-full h-1/5 bangers text-6xl self-center text-center text-[#285F5F]">
            WEB TEAM
          </div>
          <Cards data={webTeam} />
          <Cards data={juniorwebTeam} />
        </div>
        <div className="pt-12">
          <div className="w-full h-1/5 bangers text-6xl self-center text-center text-[#285F5F]">
            MEDIA CLUB
          </div>
          <Cards data={mediaClub} />
        </div>
      </div>
      <div className=" mx-12 pt-12 md:flex gap-12 hidden">
          <div className=" h-1/5 bangers whitespace-nowrap text-3xl self-center text-[#285F5F]">
            Special Mentions
          </div>
          <Specials data={specialsX} />
            </div>
            
    </main>
  );
}

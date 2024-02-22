"use client";
import React, { useState } from "react";
import "../common/Navbar.css"

const FloatButton = () => {
  const [techOrArts, settechOrArts] = useState(0);
  return (
    <div className="flex justify-center overflow-x-hidden">
      <div className="w-96 h-20 rounded-full z-10 backdrop-blur-md bg-white/40  absolute bottom-2 mb-[4vh]">
        <div className="w-[100%] h-[100%] px-5 text-2xl font-semibold flex justify-between items-center">
          <div
            className={` w-[50%] h-[70%] ${
              techOrArts == 0 ? "bg-[#435856] text-white" : "text-black"
            }     rounded-full flex justify-center items-center font-[nav-font] uppercase cursor-pointer transition-all`}
            onClick={() => settechOrArts(0)}
          >
            Tech fest
          </div>
          <div
            className={` w-[50%] h-[70%] ${
              techOrArts == 1 ? "bg-[#435856] text-white" : "text-black"
            }     rounded-full flex justify-center items-center font-[nav-font] uppercase cursor-pointer transition-all`}
            onClick={() => settechOrArts(1)}
          >
            art fest
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatButton;

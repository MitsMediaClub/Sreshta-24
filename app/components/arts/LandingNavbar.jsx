"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LandingNavbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const navToggle = () => {
    setShow(!show);
    document.body.style.overflow = show ? "hidden" : "auto";
  };
  return (
    <>
      <div className="w-full h-full relative flex justify-between px-20">
        <div className="bg-[#FFFDF6] size-36 flex justify-center items-center">
          <Image
            className="cursor-pointer"
            width={100}
            height={100}
            src="/varnam/footer/varnamLogo.svg"
            alt="MITS Logo"
            onClick={() => {
              router.push("/varnam");
            }}
          />
        </div>
        <div className="bg-[#FFFDF6] size-36 flex items-center justify-center">
          <div
            onClick={() => navToggle()}
            id="burger"
            className="hover:scale-110 transition-all duration-100 ease-in-out flex flex-col gap-1.5 w-fit relative z-50"
          >
            <div
              className={`w-11 h-[7px] bg-[#AB9B5F] transition-all duration-500 rounded-full ${
                show ? "" : "rotate-45 translate-y-1.5"
              }`}
            ></div>
            <div
              className={`w-11 h-[7px] bg-[#AB9B5F] transition-all duration-500 rounded-full ${
                show ? "" : "hidden"
              }`}
            ></div>
            <div
              className={`w-11 h-[7px] bg-[#AB9B5F] transition-all duration-500 rounded-full ${
                show ? "" : "-rotate-45 -translate-y-1.5"
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0  bg-[#FFFDF6] ease-in-out duration-1000 transition-all overflow-hidden ${
          show ? "h-0 z-[-10]" : "h-screen z-40"
        }`}
      >
        <div className="text-[3rem] font-[nav-font] flex flex-col items-center justify-evenly w-screen h-[100vh] pt-[5vw]">
          <span
            onClick={() => {
              router.push("/");
              navToggle();
            }}
            className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
          >
            Home
          </span>
          <span
            onClick={() => {
              router.push("/events");
              navToggle();
            }}
            className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
          >
            Events
          </span>
          <span
            onClick={() => {
              router.push("/about");
              navToggle();
            }}
            className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
          >
            About
          </span>
          <span
            onClick={() => {
              router.push("/faq");
              navToggle();
            }}
            className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
          >
            Faq
          </span>
          <span
            onClick={() =>
              (window.location.href = "mailto:example@example.com")
            }
            className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]"
          >
            Contact
          </span>
        </div>
        {/* <FloatButton /> */}
      </div>
    </>
  );
};

export default LandingNavbar;

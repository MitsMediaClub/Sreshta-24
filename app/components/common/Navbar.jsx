"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Navbar.css"
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  const hamburger = () => {
    document.getElementById("nav-burger").style.display = "none";
    document.getElementById("nav-cross").style.display = "flex";
    document.getElementById("nav-items-main").style.bottom = "0%";
  };
  const navClose = () => {
    document.getElementById("nav-cross").style.display = "none";
    document.getElementById("nav-burger").style.display = "flex";
    document.getElementById("nav-items-main").style.bottom = "100%";
  };

  return (
    <nav id="nav-main" className="flex md:hidden mb-20">
      <div
        className="fixed bottom-full z-40 bg-slate-200 duration-1000"
        id="nav-items-main"
      >
        <div className="text-3xl font-[nav-font] flex flex-col items-center justify-evenly w-screen h-[70vh] pt-[15vw]">
          <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]">
            Home
          </span>
          <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]">
            Events
          </span>
          <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]">
            Gallery
          </span>
          <Link href="/about" className='hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]'>
                About
            </Link>
          <span className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px]">
            Contact
          </span>
        </div>

        <div className="text-3xl font-[nav-font] flex flex-col items-center justify-evenly w-screen h-[30vh] pt-[7vw] rounded-[15px] shadow-2xl">
          <span className="nav-items2">Tech Fest</span>
          <span className="nav-items2">Art Fest</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

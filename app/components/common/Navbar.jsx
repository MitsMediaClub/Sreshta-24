"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const hamburger = () => {
    document.getElementById("nav-burger").style.display = "none";
    document.getElementById("nav-cross").style.display = "flex";
    document.getElementById("nav-items-main").style.bottom = "0%";
    document.body.style.overflow = "hidden";
  };
  const navClose = () => {
    document.getElementById("nav-cross").style.display = "none";
    document.getElementById("nav-burger").style.display = "flex";
    document.getElementById("nav-items-main").style.bottom = "100%";
    document.body.style.overflow = "auto";
  };

  return (
    <nav id="nav-main" className="flex md:hidden mb-24">
      <div
        className={`flex min-w-[100vw] fixed justify-between items-center z-50 ${
          pathname.includes("/varnam") ? " bg-[#FFFDF6]" : " bg-[#daebec9e]"
        }`}
        id="nav-part1"
      >
        {pathname.includes("/varnam") ? (
          <Image
            className="ml-6 mb-2 mt-4"
            width={50}
            height={50}
            src="/varnam/footer/varnamLogo.svg"
            alt="MITS Logo"
            onClick={() => {
              router.push("/varnam");
            }}
          />
        ) : (
          <Image
            className="ml-6 mb-2 mt-4"
            width={50}
            height={50}
            src="/common/shreshtaLogo.svg"
            alt="MITS Logo"
            onClick={() => {
              router.push("/");
            }}
          />
        )}

        <svg
          onClick={hamburger}
          className="flex h-10 w-10 mr-6 mb-2 mt-4"
          id="nav-burger"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <svg
          onClick={navClose}
          className="hidden md:h-10 w-10 mr-6 mb-2 mt-4"
          id="nav-cross"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      </div>
      <div
        className={`fixed bottom-full z-40 ${
          pathname.includes("/varnam") ? " bg-[#FFFDF6]" : " bg-[#daebec9e]"
        } duration-1000 pt-10`}
        id="nav-items-main"
      >
        <div className="text-3xl font-[nav-font] flex flex-col items-center justify-evenly w-screen h-screen pt-[15vw]">
          <span
            onClick={() => {
              router.push("/");
              navClose();
            }}
            className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
          >
            Home
          </span>
          <span
            onClick={() => {
              router.push("/events");
              navClose();
            }}
            className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
          >
            Events
          </span>
          <span
            onClick={() => {
              router.push("/about");
              navClose();
            }}
            className="hover:bg-[#375e5edd] py-[0.4vw] px-[5vw] rounded-[30px] cursor-pointer hover:font-bold transition-all ease-in-out duration-300"
          >
            About
          </span>
          <span
            onClick={() => {
              router.push("/faq");
              navClose();
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
      </div>
    </nav>
  );
};

export default Navbar;

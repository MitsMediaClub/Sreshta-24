"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Navbar.css"

const Navbar = () => {
  const router = useRouter();

  const hamburger = () => {
    document.getElementById("nav-part1").style.height = "10vh";
    document.getElementById("nav-items-main").style.width = "100vw";
    document.getElementById("nav-items-main").style.height = "90vh";
    document.getElementById("nav-items-main").style.animationName = "nav";
    document.getElementById("nav-items-main").style.animationDuration = "3s";
    document.getElementById("nav-items-main").style.backgroundColor = "#DAEBEC";
    document.getElementById("nav-burger").style.display = "none";
    document.getElementById("nav-cross").style.display = "flex";
    document.getElementById("nav-items-main").style.display = "flex";
    document.getElementById("nav-items-main").style.flexDirection = "column";
  }
  const navClose = () => {
    document.getElementById("nav-cross").style.display = "none";
    document.getElementById("nav-items-main").style.display = "none";
    document.getElementById("nav-burger").style.display = "flex";
  }

  return (
    <nav id="nav-main" className="nav-main">
      <div className="nav-part1" id="nav-part1">
        <Image
          width={40}
          height={40}
          src="/common/shreshtaLogo.svg"
          alt="MITS Logo"
        />
        <svg onClick={hamburger} className="nav-burger" id="nav-burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        <svg onClick={navClose} className="nav-cross" id="nav-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </div>
      <div className="nav-items-main" id="nav-items-main">
        <div className="nav-items-main1">
          <span className="nav-items">
            Home
          </span>
          <span className="nav-items">
            Events
          </span>
          <span className="nav-items">
            Gallery
          </span>
          <span className="nav-items">
            About
          </span>
          <span className="nav-items">
            Contact
          </span>
        </div>

        <div className="nav-items-main2">
          <span className="nav-items2">
              Tech Fest
          </span>
          <span className="nav-items2">
            Art Fest
          </span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 h-24 w-screen flex items-center justify-between p-5 px-20 bg-tech-bg z-50">
      {/* <Image width={50} height={50} src="/arrow.png" alt="MITS Logo" /> */}
      <div />
      <div className="flex gap-20 dog text-3xl">
        <span
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer hover:bg-tech-primary hover:text-white rounded-lg transition-all ease-in-out duration-300 p-5"
        >
          Home
        </span>
        <span
          onClick={() => {
            router.push("/events");
          }}
          className="cursor-pointer hover:bg-tech-primary hover:text-white rounded-lg transition-all ease-in-out duration-300 p-5"
        >
          Events
        </span>
        <span className="cursor-pointer hover:bg-tech-primary hover:text-white rounded-lg transition-all ease-in-out duration-300 p-5">
          Workshops
        </span>
        <span className="cursor-pointer hover:bg-tech-primary hover:text-white rounded-lg transition-all ease-in-out duration-300 p-5">
          Sponsors
        </span>
        <span className="cursor-pointer hover:bg-tech-primary hover:text-white rounded-lg transition-all ease-in-out duration-300 p-5">
          Contact
        </span>
      </div>
      <Image width={50} height={50} src="/shreshtaLogo.svg" alt="MITS Logo" />
    </nav>
  );
};

export default Navbar;

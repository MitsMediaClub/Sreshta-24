"use client";
import Image from "next/image";

import { Instagram, Github, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex items-center justify-between md:pt-16 md:pr-8 md:pl-8 md:pb-6 pb-4 pt-6">
      <div className="flex items-center ">
        <Image
          src="/assets/nav/Shreshta.png"
          width={100}
          height={100}
          alt="Shreshta Logo"
          className="hidden md:block"
        />
        <Image
          src="/assets/nav/Shreshta.png"
          width={50}
          height={50}
          alt="Shreshta Logo"
          className="block md:hidden"
        />
        <div className="bangers md:text-6xl text-2xl text-[#285F5F]">
          SHRESHTA
        </div>
      </div>
      <div>
        <div className="gooddog md:text-4xl text-l md:p-4 text-[#285F5F]">
          © 2024 MITS. All rights reserved.
        </div>
        <div className="scale-75 md:scale-100 p-0 md:p-4 text-[#285F5F] gap-10 flex flex-row ">
          <a href="">
            <Instagram />
          </a>
          <a href="">
          <Linkedin />
          </a>
          <a href="">
            <Youtube />
          </a>
          <a href="">
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}

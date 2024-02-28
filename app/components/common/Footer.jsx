"use client";
import Image from "next/image";

import { Instagram, Github, Youtube, Linkedin } from "lucide-react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div
      className={`flex items-center justify-between md:pt-16 md:pr-8 md:pl-8 md:pb-6 pb-4 pt-6 pr-6 ${
        pathname.includes("/varnam") ? "bg-[#FFFDF6]" : "bg-tech-bg"
      }`}
    >
      {pathname.includes("/varnam") ? (
        <div className="flex items-center ">
          <Image
            src="/varnam/footer/varnamLogo.svg"
            width={100}
            height={100}
            alt="Varnam Logo"
            className="hidden md:block"
          />
          <Image
            src="/varnam/footer/varnamLogo.svg"
            width={50}
            height={50}
            alt="Shreshta Logo"
            className="block md:hidden"
          />
          <div className="bangers md:text-6xl text-2xl text-[#FFE179] HeroTextMainTwo">
            VARNAM '24
          </div>
        </div>
      ) : (
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
            SHRESHTA '24
          </div>
        </div>
      )}
      <div
        className={`${
          pathname.includes("/varnam")
            ? "text-[#FFE179] HeroTextMainTwoLight"
            : "text-[#285F5F]"
        }`}
      >
        <div className="dog md:text-4xl text-l md:p-4 ">
          © 2024 MITS. All rights reserved.
        </div>
        <div className="p-0 md:p-4 text-black lg:gap-10 flex flex-row lg:justify-center ">
          <a href="https://www.instagram.com/shreshtamits/">
            <Instagram className="scale-50 md:scale-100" />
          </a>
          <a href="https://github.com/MitsMediaClub/Sreshta-24">
            <Github className="scale-50 md:scale-100" />
          </a>
        </div>
      </div>
    </div>
  );
}

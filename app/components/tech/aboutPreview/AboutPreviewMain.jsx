"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import webTeam from "../../../about/data/leadwebTeam.json";
import subWeb from "../../../about/data/subweb.json";
import Marquee from "react-fast-marquee";

const AboutPreviewMain = () => {
  const router = useRouter();
  return (
    <div className="lg:pb-20">
      <div className="flex justify-between items-center gap-10 mobile:gap-1 lg:p-20 mobile:p-4 mobile:pb-0 mh:gap-4 mh:p-4">
        <Image
          width={500}
          height={500}
          src="/about/AbtLandhed.png"
          alt="Meh"
          className="w-56 mobile:w-28"
        />
        <h1
          className={`dog text-6xl mh:text-3xl mobile:text-lg text-tech-primary`}
        >
          The more you know, <br />
          the better
        </h1>
        <hr className="w-1/2 mh:w-1/4 mobile:w-1/6 h-1 bg-tech-primary" />
        <Image
          width={500}
          height={500}
          src="/about/num3.png"
          alt="Meh"
          className="w-32 mobile:w-14 mh:w-24"
        />
      </div>

      <p className="dog px-5 lg:px-20 text-xl lg:text-3xl mt-5 lg:mt-20 text-wrap text-tech-primary ">
        Shreshta is an exhilarating showcase of innovation and creativity,
        bringing together students, industry experts, and tech enthusiasts.
        Featuring a diverse range of events, workshops, and competitions, it
        serves as a platform to explore cutting-edge technologies, exchange
        ideas, and foster a passion for innovation. From hackathons to
        cybersecurity challenges, the tech fest is a dynamic hub that celebrates
        the spirit of technological advancement, encouraging collaboration and
        pushing the boundaries of knowledge. Join us for an immersive experience
        that bridges academia with the ever-evolving world of technology.
      </p>
      <div className="my-10">
        <Marquee autoFill>
          <div className="w-full flex mt-5">
            {webTeam.map((value, index) => (
              <a key={index} href={value.link} className="">
                <div className="relative group rounded-xl bg-no-repeat bg-cover bg-center w-[300px] h-[300px] md:w-[350px] md:h-[350px] p-4 flex flex-col justify-end hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer items-center ">
                  <img src={value.img} className="absolute pb-4 top-0 h-full" />
                  <div className="px-5 py-3">
                    <h1 className="font-bold text-xl psans text-white whitespace-nowrap relative z-30">
                      {value.name}
                    </h1>
                    <h1 className="font-light text-md psans text-white whitespace-nowrap relative z-30">
                      {value.role}
                    </h1>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="w-full flex mt-5">
          <a href="https://www.linkedin.com/in/glitchy/" className="">
                <div className="relative group rounded-xl bg-no-repeat bg-cover bg-center w-[300px] h-[300px] md:w-[350px] md:h-[350px] p-4 flex flex-col justify-end hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer items-center ">
                  <img src="/assets/about/team/mediaclub/Advaith.png" className="absolute pb-4 top-0 h-full" />
                  <div className="px-5 py-3">
                    <h1 className="font-bold text-xl psans text-white whitespace-nowrap relative z-30">
                      Advaith Narayanan
                    </h1>
                    <h1 className="font-light text-md psans text-white whitespace-nowrap relative z-30">
                      DevOps Engineer
                    </h1>
                  </div>
                </div>
              </a>
          </div>
          <div className="w-full flex mt-5">
            {subWeb.map((value, index) => (
              <a key={index} href={value.link} className="">
                <div className="relative group rounded-xl bg-no-repeat bg-cover bg-center w-[300px] h-[300px] md:w-[350px] md:h-[350px] p-4 flex flex-col justify-end hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer items-center ">
                  <img src={value.img} className="absolute pb-4 top-0 h-full" />
                  <div className="px-5 py-3">
                    <h1 className="font-bold text-xl psans text-white whitespace-nowrap relative z-30">
                      {value.name}
                    </h1>
                    <h1 className="font-light text-md psans text-white whitespace-nowrap relative z-30">
                      {value.role}
                    </h1>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Marquee>
      </div>
      <h1
        onClick={() => router.push("/about")}
        className="text-center text-5xl font-bold bangers hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer pt-10"
      >
        View All
      </h1>
    </div>
  );
};

export default AboutPreviewMain;

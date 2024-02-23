"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
      <h1
        onClick={() => router.push("/about")}
        className="text-center text-5xl font-bold bangers hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer py-10"
      >
        About Us
      </h1>
    </div>
  );
};

export default AboutPreviewMain;

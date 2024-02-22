"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutPreviewMain = () => {
  const router = useRouter();
  return (
    <div className="lg:pb-20">
      <div className="flex justify-between items-center gap-10 mobile:gap-1 lg:p-20 mobile:p-4 mh:gap-4 mh:p-4">
        <Image
          width={500}
          height={500}
          src="/about/AbtLandhed.png"
          alt="Meh"
          className="w-56 mobile:w-28"
        />
        <h1
          className={`dog text-6xl mh:text-3xl mobile:text-xs text-tech-primary`}
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

      <p className="dog px-5 lg:px-20 text-3xl mt-5 lg:mt-20 text-tech-primary ">
        The tech fest has always been a wonderful shit to be through. Its
        mesmerising, traumatising and a beautiful experience to go through.
        <br />
        <br /> The team behind the website has worked tirelessly to ensure you
        get access to everything you wish for. This text is a placeholder, for
        god sake do not use this. Dhanyawadh.
        <br />
        <br /> Instead of copy-pasting the above, i’m writing this, so that the
        uniqueness of each text makes it seem like something serious is going on
        here. Most people skim over, but if you did read, you will understand
        that nothings going on here. Happy to waste your time.
        <br />
        <br />
      </p>
      <h1
        onClick={() => router.push("/about")}
        className="text-center text-5xl font-bold bangers hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
      >
        View
      </h1>
    </div>
  );
};

export default AboutPreviewMain;

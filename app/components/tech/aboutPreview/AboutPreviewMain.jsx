"use client";
import { useRouter } from "next/navigation";

const AboutPreviewMain = () => {
  const router = useRouter();
  return (
    <div className="pb-20">
      <div className="pt-12 flex justify-between items-center px-10">
        <img src="/about/AbtLandhed.png" alt="abthed" className="w-52" />
        <h1 className="text-5xl dog text-tech-primary">
          The more you know, <br />
          the better
        </h1>
        <hr className="w-1/3 h-1 bg-tech-primary" />
        <img src="/about/num3.png" alt="load" className="w-32" />
      </div>
      <p className="dog px-20 text-3xl mt-20 text-tech-primary ">
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

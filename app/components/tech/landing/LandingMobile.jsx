import Image from "next/image";
import React from "react";

const LandingMobile = () => {
  return (
    <div className=" text-black px-1">
      <div className="text-[#E9F8E8] overflow-x-hidden  relative w-full min-h-screen">
        <div className="relative">
          <div className="HeroText px-10 absolute z-10 top-0 left-0 bg-no-repeat h-full w-full flex flex-col justify-center items-center">
            <Image
              className=" animate-wiggle"
              src={"/tech/Titles.webp"}
              width={800}
              height={800}
            ></Image>
          </div>
          <div className=" Wrapper1 h-full">
            {/* Hero Image  */}
            <div className="relative h-full">
              <Image
                width={10000}
                height={10000}
                src="/tech/Background(M).webp"
                alt="Meh"
                className="w-screen h-full"
              />

              {/* Hero Text  */}
            </div>
          </div>
        </div>

        {/* <FloatButton></FloatButton> */}
      </div>
    </div>
  );
};

export default LandingMobile;

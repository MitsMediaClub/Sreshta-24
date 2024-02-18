import Image from "next/image";
import React from "react";

const Top = () => {
  return (
    // <div>Top</div>
    <>
      {/* <div className="px-20 bg-red- mh:px-10 mobile:px-4">
        <div className="flex items-center justify-between">
          <Image
            width={1000}
            height={1000}
            alt="img"
            className="w-54 mobile:h-[10vh]"
            src="/gallery/Group 9.png"
          ></Image>
          <div className="text-[300%] mobile:text-[100%] tw:text-[180%] dg-text text-[#375E5E] tracking-tighter leading-none">
            <p>Is past isn’t proof, </p>
            <p>what else could be?</p>
          </div>
          <div className="bg-[#375E5E] w-[25%] h-1"></div>
          <div className="h-[12%] w-[15%] relative">
            <Image
              height={1000}
              width={1000}
              className="h-[100%] w-full"
              src="/gallery/Group 39.png"
              alt=""
            />
          </div>
        </div>
      </div> */}


      <div className="flex justify-between items-center gap-10 mobile:gap-4 p-20 mobile:p-5">
            <Image
              width={500}
              height={500}
              src="/gallery/topL.png"
              alt="Meh"
              className="w-44"
            />
            <h1 className="dog text-5xl mobile:text-xs text-tech-primary">
              More than 100 <br /> events to conquer
            </h1>
            <hr className="w-1/2 h-1 bg-tech-primary" />
            <Image
              width={500}
              height={500}
              src="/gallery/topR.png"
              alt="Meh"
              className="w-32"
            />
      </div>
    </>
  );
};

export default Top;

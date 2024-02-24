"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

export default function Book(props) {
  const { width, height, portrait, pages } = props;
  const book = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every 3 seconds!");
      book.current.pageFlip().flipNext();
    }, 5000); // 3000 milliseconds = 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative select-none">
      <HTMLFlipBook
        ref={book}
        width={width}
        height={height}
        // useMouseEvents={false}
        autoPlay
        interval={20}
        usePortrait={portrait}
        drawShadow={false}
      >
        {pages &&
          pages.map((page, index) => {
            if (page.bg) {
              return (
                <div
                  key={index}
                  className="bg-page-right text-black text-3xl relative"
                >
                  <Image
                    src={page.bg}
                    alt="Picture of the event"
                    width={500}
                    height={700}
                    className="w-[90%] h-[95%]"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              );
            }
            return (
              <div
                key={index}
                className="bg-page-left text-[#375E5E] text-3xl p-20 w-full h-full"
              >
                <h1 className="text-5xl lg:text-6xl font-bold w-2/3 bangers">
                  {page.content}
                </h1>
                <h1 className="mt-5 font-medium text-2xl bangers">
                  {page.date}
                </h1>
                <p className="text-lg font-medium mt-5 acme">{page.desc}</p>
              </div>
            );
          })}
      </HTMLFlipBook>
    </div>
  );
}

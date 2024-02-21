"use client";
import React, { useState, useEffect, useRef } from "react";

const Bot = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);

    return () => clearTimeout(0.5);
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const hideHim = useRef(false);

  const handleIconClick = () => {
    setShowPopup(true);
    setIsMinimized(false);
    hideHim.current = !hideHim.current;
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setShowPopup(false);
    hideHim.current = false;
  };

  const handleMinimizeClick = (event) => {
    event.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="h-screen w-screen relative flex justify-end">
      <div onClick={handleIconClick} className="cursor-pointer">
        <img
          src="/bot/boticon.png"
          className={`h-40 w-40 transition-all duration-500 hover:scale-110 z-[100] ${
            hideHim.current ? "translate-x-[50px]" : ""
          }`}
          alt=""
          style={{ position: "fixed", bottom: 60, right: -60 }}
        />
        {showMessage && (
          <div className="fixed top-80 z-[100]">
            <img
              src="/bot/text.png"
              className="h-30 w-40 transition-all duration-500 scale-80 mx-10"
              alt=""
              style={{ position: "fixed", bottom: 200, right: 0 }}
            />
          </div>
        )}
        {showPopup && (
          <div
            className={`fixed top-5 right-28 p-6 bg-white w-1/4 h-full border-black border-4 rounded-xl shadow z-[100] transition-all duration-500 
            }`}
            style={{
              opacity: showPopup ? 1 : 0,
              transition: "opacity 0.5s, transform 0.5s",
              transform: `translateY(${isMinimized ? "650px" : "0px"})`,
            }}
          >
            <div className="flex gap-4 justify-end font-bold">
              <button onClick={handleMinimizeClick}>-</button>
              <button onClick={handleCloseClick}>x</button>
            </div>
            <div className="flex text-bold items-center justify-center p-2">
              SHRESHTA CHATBOT
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bot;

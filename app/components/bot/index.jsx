"use client";
import React, { useState, useEffect } from "react";

const Bot = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => clearTimeout(0.5);
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="h-full w-screen flex justify-end">
      <div onClick={handleIconClick} className="cursor-pointer">
        <img
          src="/bot/boticon.png"
          className="h-40 w-40 transition-transform duration-300 hover:scale-110 z-[100]"
          alt=""
          style={{ position: "fixed", bottom: 60, right: -60 }}
        />
        {showMessage && (
          <div className="fixed top-80 z-[100]">
            <img
              src="/bot/text.png"
              className="h-30 w-40 transition-transform duration-500 scale-80 mx-10"
              alt=""
              style={{ position: "fixed", bottom: 200, right: 0 }}
            />
          </div>
        )}
        {showPopup && (
          <div className="fixed top-5 right-28 p-8 bg-white w-1/4 h-full border-black border-4 rounded-xl shadow z-[100]">
            <div className="flex text-bold items-center justify-center">
              Shreshta ChatBot
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bot;

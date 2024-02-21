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

  return (
    <div className="h-full w-screen flex justify-end">
      <img
        src="/bot/boticon.png"
        className="h-40 w-40 transition-transform duration-300 hover:scale-110"
        alt=""
        style={{ position: "fixed", bottom: 60, right: -60 }}
      />
      {showMessage && (
        <div className="fixed top-80">
          <img
            src="/bot/text.png"
            className="h-30 w-40 transition-transform duration-500 scale-80 mx-10"
            alt=""
            style={{ position: "fixed", bottom: 200, right: 0 }}
          />
        </div>
      )}
    </div>
  );
};

export default Bot;

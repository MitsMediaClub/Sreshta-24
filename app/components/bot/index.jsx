"use client";
import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "./chatBubble";

const Bot = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const hideHim = useRef(false);
  const messagesEndRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
      setShowPopup(false);
    }, 1500);

    return () => clearTimeout(0.5);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchMessage = () => {
    const queryData = { query: userMessage };
    console.log("fetch mssg");

    fetch("https://chat.shreshta.tech/api/shreshta_bot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data["answer"]);
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: data["answer"], sender: "bot" },
        ]);
        console.log([...messages, { message: data["answer"], sender: "bot" }]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
    scrollToBottom();
  };

  const handleUserMessageSubmit = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: userMessage, sender: "user" },
    ]);
    setUserMessage("");
  };

  const handleIconClick = () => {
    setShowPopup(true);
    hideHim.current = !hideHim.current;
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setShowPopup(false);
    hideHim.current = false;
  };

  return (
    <div className="w-screen relative flex justify-end">
      <div className="cursor-pointer">
        <img
        onClick={hideHim.current === true ? handleCloseClick : handleIconClick } 
          src="/bot/boticon.webp"
          className={`h-40 w-40 transition-all duration-500 hover:scale-110 z-[30] ${
            hideHim.current ? "translate-x-[50px]" : ""
          }`}
          alt=""
          style={{ position: "fixed", bottom: 60, right: -60 }}
        />
        {showMessage && (
          <div className="fixed top-80 z-[30]">
            <img
              src="/bot/text.webp"
              className="h-30 w-40 transition-all duration-500 scale-80 mx-10"
              alt=""
              style={{ position: "fixed", bottom: 200, right: 0 }}
            />
          </div>
        )}
        {showPopup && (
          <div
            className={`fixed sm:bottom-0 sm:right-0 md:bottom-4 md:right-24 bg-[#E9F8E8] sm:w-screen sm:h-screen md:w-[400px] md:h-full sm:rounded-0 md:rounded-xl shadow z-[100] transition-all duration-500
            }`}
            style={{
              opacity: showPopup ? 1 : 0,
              transition: "opacity 1s, transform 1s",
              height: `${showPopup ? "650px" : "0px"}`,
            }}
          >
            <div className="overflow-hidden md:rounded-xl relative h-full w-full">
              <div className="bg-[#73AAA6]/90 relative z-20">
                <div className="flex justify-between md:text-xl font-bold p-6 text-white bangers">
                  SHRESHTA CHATBOT
                  <div className="flex gap-4">
                    <button onClick={handleCloseClick}>
                      <img src="/bot/hide.webp" className="w-4"></img>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 h-full w-full">
                <img
                  src="/bot/back.webp"
                  alt="Background"
                  className="h-full w-full"
                />
              </div>
              <div className="relative p-4 acme h-[79%] md:h-[78%] flex flex-col overflow-hidden scrollbar overflow-y-auto overscroll-y-auto">
                {messages.map((message, index) => (
                  <ChatBubble
                    key={index}
                    message={message.message}
                    sender={message.sender}
                  />
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <style jsx>
              {`
              @media (max-width: 640px) {
                .fixed {
                  font-size: 2rem !important;
                  rounded-0 !important;
                  top: 0 !important;
                  right: 0 !important;
                  bottom: 0 !important;
                  left: 0 !important;
                  height: ${showPopup ? "100%" : "0"} !important;
                  transform: none !important;
                }
              }
            `}
            </style>
            <div className="flex w-full px-4 sm:h-full justify-center absolute bottom-0 md:h-16 pb-10">
              <form className="w-full" onSubmit={handleUserMessageSubmit}>
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    value={userMessage}
                    onChange={handleUserMessageChange}
                    id=""
                    className="flex-1 md:text-lg text-2xl rounded-lg bg-[#73AAA6]/90 md:py-2 px-4 sm:py-2 text-white focus:outline-none placeholder:text-white acme"
                    placeholder="Type your question here..."
                    required
                  />
                  <button
                    onClick={() => {
                      fetchMessage();
                      setLoading(true);
                    }}
                    type="submit"
                    className={`flex rounded-lg bg-[#73AAA6]/90 py-4 items-center px-4 text-white ${
                      loading === true
                        ? "cursor-not-allowed, pointer-events-none"
                        : ""
                    }`}
                  >
                    {loading ? (
                      <svg
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <img src="/bot/arrow.webp" alt="" width={15} height={15} />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bot;

"use client";
import React, { useState } from "react";
import Book from "./Book";
import EventCards from "./EventCards";
import EventModal from "./EventModal";

const EventsMain = () => {
  const pages = [
    {
      content: "Motor Sports",
      date: "2 Mar 2023",
      desc: `
          The tech fest has always been a wonderful event to be through.
          It's mesmerising, traumatising and a beautiful experience to go
          through. The team behind the website has worked tirelessly to
          ensure you get access to everything you wish for. This text is
          a placeholder, for god sake do not use this. Dhanyawadh
          Instead of copy-pasting the above, I'm writing this so that
          the uniqueness of each text makes it seem like something
          serious is going on here. Most people skim over, but if you
          did read, you will understand that nothing's going on here.
          Happy to waste your time.
        `,
    },
    {
      bg: "/events/comic.png",
    },
    {
      content: "Motor Sport",
      date: "2 Mar 2024",
      desc: `
          The tech fest has always been a wonderful event to be through.
          It's mesmerising, traumatising and a beautiful experience to go
          through. The team behind the website has worked tirelessly to
          ensure you get access to everything you wish for. This text is
          a placeholder, for god sake do not use this. Dhanyawadh
          Instead of copy-pasting the above, I'm writing this so that
          the uniqueness of each text makes it seem like something
          serious is going on here. Most people skim over, but if you
          did read, you will understand that nothing's going on here.
          Happy to waste your time.
        `,
    },
    {
      bg: "/events/comic.png",
    },
  ];
  const [selectedEvent, setSelectedEvent] = useState(null);
  function selectEvent(value) {
    setSelectedEvent(value);
  }
  return (
    <>
      <div className="pt-0">
        <div
          className="hidden lg:flex justify-center p-20 pb-72 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/common/bgDots.png')" }}
        >
          <Book width={600} height={800} portrait={false} pages={pages} />
        </div>
        <div
          className="lg:hidden flex justify-center pb-44 bg-cover bg-center  bg-no-repeat"
          style={{ backgroundImage: "url('/common/bgDots.png')" }}
        >
          <Book width={400} height={700} portrait={true} pages={pages} />
        </div>
        <div className="relative">
          <EventCards selectEvent={selectEvent} />
          {selectedEvent && (
            <EventModal
              selectedEvent={selectedEvent}
              selectEvent={selectEvent}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EventsMain;

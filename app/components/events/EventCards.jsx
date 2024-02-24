"use client";
import Image from "next/image";
import Search from "./Search";
import { useState } from "react";

import eventsTemp from "./events.json";
const EventCards = ({ selectEvent }) => {
  const [events, setEvents] = useState(eventsTemp);
  const [search, setSearch] = useState("");
  function changeSearch(value) {
    setSearch(value);
    setEvents(
      eventsTemp.filter((event) => {
        const regex = new RegExp(value, "i");
        return regex.test(event.name);
      })
    );
  }
  return (
    <div className="p-5 md:p-20 pt-0">
      <Search search={search} changeSearch={changeSearch} />
      <div className="flex flex-wrap gap-5 md:gap-10 mt-10 items-center justify-center">
        {events.map((event, index) => (
          <div key={index} className="relative cursor-pointer ">
            <h1
              key={index}
              className="absolute p-5 text-wrap text-white text-xl md:text-4xl font-bold z-10 bangers"
            >
              {event.name}
            </h1>
            <div
              key={index}
              style={{
                backgroundImage: `url(${event.cardImg})`,
              }}
              alt="Event"
              className="brightness-[0.65] z-0 bg-cover bg-center w-32 h-[15rem] md:w-96 md:h-[40rem] hover:scale-105 transition-all ease-in-out duration-300"
              onClick={() => {
                selectEvent(event);
                document.body.style.overflow = "hidden";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;

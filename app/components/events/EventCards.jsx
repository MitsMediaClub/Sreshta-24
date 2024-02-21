"use client";
import Image from "next/image";
import Search from "./Search";
import { useState } from "react";

import eventsTemp from "./events.json"

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
      <div className="flex flex-wrap gap-10 mt-10 items-center justify-center">
        {events.map((event, index) => (
          <div className="relative cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 w-72">
            <h1 className="absolute p-5 text-wrap text-white text-3xl font-bold z-10">{event.name}</h1>
          <Image
            key={index}
            width={1000}
            height={1000}
            src={event.cardImg}
            alt="Event"
            className="brightness-50 z-0"
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

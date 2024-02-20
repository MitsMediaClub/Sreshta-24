"use client";
import Image from "next/image";
import Search from "./Search";
import { useState } from "react";

const EventCards = () => {
  const eventsTemp = [
    {
      name: "Motor Sports 1",
      cardImg: "/events/event1.png",
      link: "https://www.google.com",
    },
    {
      name: "Motor Sports 1",
      cardImg: "/events/event2.png",
      link: "https://www.google.com",
    },
    {
      name: "Motor Sports 2",
      cardImg: "/events/event2.png",
      link: "https://www.google.com",
    },
    {
      name: "Motor Sports 2",
      cardImg: "/events/event2.png",
      link: "https://www.google.com",
    },
    {
      name: "Motor Sports 3",
      cardImg: "/events/event2.png",
      link: "https://www.google.com",
    },
    {
      name: "Motor Sports 4",
      cardImg: "/events/event2.png",
      link: "https://www.google.com",
    },
    {
      name: "Motor Sports 4",
      cardImg: "/events/event2.png",
      link: "https://www.google.com",
    },
  ];
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
          <Image
            key={index}
            width={1000}
            height={1000}
            src={event.cardImg}
            alt="Event"
            className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 w-72"
            onClick={() => window.open(event.link)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCards;

"use client";
import Image from "next/image";
import Search from "./Search";
import { useState } from "react";

const EventCards = ({ selectEvent }) => {
  const eventsTemp = [
    {
      name: "Motor Sports",
      date: "2 Mar 2023",
      time: "10:00 AM - 5:00 PM",
      cardImg: "/events/event1.png",
      regLink: "https://www.google.com",
      prize: ["1st Prize: $1000", "2nd Prize: $500", "3rd Prize: $250"],
      desc: "The tech fest has always been a wonderful event to be through. It's mesmerising, traumatising and a beautiful experience to go through. The team behind the website has worked tirelessly to ensure you get access to everything you wish for. This text is a placeholder, for god sake do not use this. Dhanyawadh Instead of copy-pasting the above, I'm writing this so that the uniqueness of each text makes it seem like something serious is going on here. Most people skim over, but if you did read, you will understand that nothing's going on here. Happy to waste your time.",
      rules: [
        "Rule 1: No cheating",
        "Rule 2: Bring Notebook and Pen",
        "Rule 3: Maintain discipline",
      ],
    },
    {
      name: "Motor Sport 2",
      date: "2 Mar 2024",
      time: "10:00 AM - 5:00 PM",
      cardImg: "/events/event2.png",
      regLink: "https://www.google.com",
      prize: ["1st Prize: $1000", "2nd Prize: $500", "3rd Prize: $250"],
      desc: "The tech fest has always been a wonderful event to be through. It's mesmerising, traumatising and a beautiful experience to go through. The team behind the website has worked tirelessly to ensure you get access to everything you wish for. This text is a placeholder, for god sake do not use this. Dhanyawadh Instead of copy-pasting the above, I'm writing this so that the uniqueness of each text makes it seem like something serious is going on here. Most people skim over, but if you did read, you will understand that nothing's going on here. Happy to waste your time.",
      rules: [
        "Rule 1: No cheating",
        "Rule 2: Bring Notebook and Pen",
        "Rule 3: Maintain discipline",
      ],
    },
    {
      name: "Motor Sport 3",
      date: "2 Mar 2024",
      time: "10:00 AM - 5:00 PM",
      cardImg: "/events/event1.png",
      regLink: "https://www.google.com",
      prize: ["1st Prize: $1000", "2nd Prize: $500", "3rd Prize: $250"],
      desc: "The tech fest has always been a wonderful event to be through. It's mesmerising, traumatising and a beautiful experience to go through. The team behind the website has worked tirelessly to ensure you get access to everything you wish for. This text is a placeholder, for god sake do not use this. Dhanyawadh Instead of copy-pasting the above, I'm writing this so that the uniqueness of each text makes it seem like something serious is going on here. Most people skim over, but if you did read, you will understand that nothing's going on here. Happy to waste your time.",
      rules: [
        "Rule 1: No cheating",
        "Rule 2: Bring Notebook and Pen",
        "Rule 3: Maintain discipline",
      ],
    },
    {
      name: "Motor Sport 4",
      date: "2 Mar 2024",
      time: "10:00 AM - 5:00 PM",
      cardImg: "/events/event2.png",
      regLink: "https://www.google.com",
      prize: ["1st Prize: $1000", "2nd Prize: $500", "3rd Prize: $250"],
      desc: "The tech fest has always been a wonderful event to be through. It's mesmerising, traumatising and a beautiful experience to go through. The team behind the website has worked tirelessly to ensure you get access to everything you wish for. This text is a placeholder, for god sake do not use this. Dhanyawadh Instead of copy-pasting the above, I'm writing this so that the uniqueness of each text makes it seem like something serious is going on here. Most people skim over, but if you did read, you will understand that nothing's going on here. Happy to waste your time.",
      rules: [
        "Rule 1: No cheating",
        "Rule 2: Bring Notebook and Pen",
        "Rule 3: Maintain discipline",
      ],
    },
    {
      name: "Motor Sport 5",
      date: "2 Mar 2024",
      time: "10:00 AM - 5:00 PM",
      cardImg: "/events/event1.png",
      regLink: "https://www.google.com",
      prize: ["1st Prize: $1000", "2nd Prize: $500", "3rd Prize: $250"],
      desc: "The tech fest has always been a wonderful event to be through. It's mesmerising, traumatising and a beautiful experience to go through. The team behind the website has worked tirelessly to ensure you get access to everything you wish for. This text is a placeholder, for god sake do not use this. Dhanyawadh Instead of copy-pasting the above, I'm writing this so that the uniqueness of each text makes it seem like something serious is going on here. Most people skim over, but if you did read, you will understand that nothing's going on here. Happy to waste your time.",
      rules: [
        "Rule 1: No cheating",
        "Rule 2: Bring Notebook and Pen",
        "Rule 3: Maintain discipline",
      ],
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
            onClick={() => {
              selectEvent(event);
              document.body.style.overflow = "hidden";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCards;

"use client";
import React, { useState } from "react";
import Book from "./Book";
import EventCards from "./EventCards";
import EventModal from "./EventModal";

const EventsMain = () => {
  const pages = [
    {
      content: "Band Wars",
      desc: `
      Imagine the electrifying clash of college bands, a musical battleground where passion resonates, talents collide, and prizes await the victors. It's not just a competition; it's a symphony of shared love for music, a vibrant celebration of skill and connection. Welcome to Band Wars, where bands collide in an electrifying musical showdown! From rock to jazz, each performance is a thrilling display of talent and passion. Audiences are captivated as bands compete for the ultimate title. With every riff and rhythm, tensions rise until the stage erupts in a crescendo of musical glory. Get ready to witness the battle of the bands like never before!
      `,
    },
    {
      bg: "/events/book/bandwars.webp",
    },
    {
      content: "Theme Show",
      desc: `
          A fun, creative spin off induced with the theme given, participants are allowed to be creative sticking to the theme,to have exemplary modelling skills to showcase the attitude, outfit and background score to create the magic of fashion meeting creativity, adhering to the theme given to them prior to the event.Prepare for an unforgettable journey into a world of endless fun and excitement at our vibrant theme show! With a lineup packed full of energetic performances, interactive games, and surprises around every corner, there's never a dull moment. Whether you're a thrill-seeker, a music lover, our dynamic show promises to keep you entertained from start to finish. Join us as we turn up the fun factor and make memories that will last a lifetime!
        `
    },
    {
      bg: "/events/book/themeshow.webp",
    },
    {
      content: "Eneryia Hackathon",
      desc: `
      Eneryia 2.0: Fueling Innovation in 24 Hours! Join us for an exhilarating 
      hackathon hosted by the Computer Science Department in collaboration with ACM. 
      Dive into a day-long coding marathon where participants will unleash their 
      creativity, collaborate with peers, and tackle real-world challenges in the 
      realm of technology. From groundbreaking software solutions to innovative 
      hardware hacks, Eneryia 2.0 is the ultimate platform to push boundaries, 
      showcase skills, and forge lasting connections in the tech community. Are 
      you ready to power up your ideas and make a difference? Join us for Eneryia 
      2.0 and let's code the future together!
        `,
    },
    {
      bg: "/events/book/eneriya.webp",
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

import React from "react";
import Book from "./Book";

const AllEvents = () => {
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
      bg: "/comic.png",
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
      bg: "/comic.png",
    },
  ];
  return (
    <div
      className="p-20 pt-0 flex justify-center"
      style={{ backgroundImage: "url('/bgDots.png')" }}
    >
      <Book width={600} height={800} portrait={false} pages={pages} />
    </div>
  );
};

export default AllEvents;

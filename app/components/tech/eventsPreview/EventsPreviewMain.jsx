"use client";
import { useRouter } from "next/navigation";

const EventsPreviewMain = () => {
  const events = [
    {
      imgLink: "/eventn1.png",
      eventName: "Event 1",
      link: "/event1",
    },
    {
      imgLink: "/eventn1.png",
      eventName: "Event 2",
      link: "/event2",
    },
    {
      imgLink: "/eventn1.png",
      eventName: "Event 3",
      link: "/event3",
    },
    {
      imgLink: "/eventn1.png",
      eventName: "Event 4",
      link: "/event4",
    },
    {
      imgLink: "/eventn1.png",
      eventName: "Event 5",
      link: "/event5",
    },
    {
      imgLink: "/eventn1.png",
      eventName: "Event 6",
      link: "/event6",
    },
  ];
  const router = useRouter();
  return (
    <div>
      <div className="pt-12 flex justify-between items-center px-10">
        <img src="/eventsheader.png" alt="events" className="w-52" />
        <h1 className="text-5xl dog text-tech-primary">
          More than 100 <br />
          events to conquer
        </h1>
        <hr className="w-1/3 h-1 bg-tech-primary" />
        <img src="/headernum1.png" alt="load" className="w-32" />
      </div>

      <div className="w-full overflow-x-scroll scrollbar overflow-y-hidden flex items-center mt-8">
        {events.map((event, index) => (
          <img
            key={index}
            src={event.imgLink}
            alt={event.eventName}
            className="w-[32rem] mr-4 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
          />
        ))}
        <img
          onClick={() => router.push("/events")}
          src="/events/viewMoreEvents.png"
          alt="View More Events"
          className="w-[32rem] mr-4 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default EventsPreviewMain;

"use client";
import { useRouter } from "next/navigation";

import events from "../../events/highlight-events.json";
import Image from "next/image";
const EventsPreviewMain = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center gap-10 mobile:gap-1 p-20 mobile:p-4 mh:gap-4 mh:p-4">
        <Image
          width={500}
          height={500}
          src="/eventsheader.webp"
          alt="Meh"
          className="w-56 mobile:w-28"
        />
        <h1
          className={`dog text-6xl mh:text-3xl mobile:text-xs text-tech-primary`}
        >
          More than 100 <br /> events to conquer
        </h1>
        <hr className="w-1/2 mh:w-1/4 mobile:w-1/6 h-1 bg-tech-primary" />
        <Image
          width={500}
          height={500}
          src="/headernum1.webp"
          alt="Meh"
          className="w-32 mobile:w-14 mh:w-24"
        />
      </div>

      <div className="w-full overflow-x-scroll scrollbar overflow-y-hidden flex items-center mt-8 gap-5 ">
        {events.map((event, index) => (
            
          <div key={index} className="relative cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 shrink-0">
            <h1 className="absolute p-5 text-wrap text-white text-4xl font-bold z-10 bangers top-0 left-0">
              {event.name}
            </h1>
            <Image
              width={1000}
              height={1000}
              src={event.cardImg}
              alt="Event"
              className="brightness-50 z-0 w-96 object-cover shrink-0"
            />
          </div>
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

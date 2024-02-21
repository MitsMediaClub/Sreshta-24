"use client";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";


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
  
  gsap.registerPlugin(ScrollTrigger);
  
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Create a timeline using the ScrollTrigger plugin
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainerRef.current, // Reference the scroll container
        start: '80% bottom', // Trigger animation when 80% from bottom of container
        end: 'top top', // End animation when top of container reaches top of viewport
        scrub: true, // Animate based on scroll position
        pin:true,
         onUpdate: (self) => console.log("direction:", self.direction),
        
      }
    });

    // Add animation to the last event image (assuming you want only the last one to animate)
    const lastEventImage = scrollContainerRef.current.lastElementChild; // Get the last image
    tl.to(lastEventImage, {
      y: '100vh', // Scroll down by the height of the viewport
      duration: 2, // Set animation duration
      ease: 'power3.out', // Use an easing function for a smooth animation
    });

    return () => {
      // Cleanup: Remove ScrollTrigger on unmount
      tl.kill();
    };
  }, []);
    
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

      <div className="w-full overflow-x-scroll scrollbar overflow-y-hidden flex items-center mt-8" ref={scrollContainerRef}>
        <img
          onClick={() => router.push("/events")}
          src="/events/viewMoreEvents.png"
          alt="View More Events"
          className="w-[32rem] mr-4 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
        />
        {events.map((event, index) => (
          <img
          key={index}
          src={event.imgLink}
          alt={event.eventName}
          className="w-[32rem] mr-4 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
          />
          ))}
      </div>
    </div>
  );
};

export default EventsPreviewMain;

import Image from "next/image";

const EventModal = ({ selectedEvent, selectEvent }) => {
  return (
    <div className="w-screen h-screen fixed top-0 flex justify-center items-center z-50">
      <div
        className="absolute top-0 left-0 bg-black/60 w-full h-full"
        onClick={() => {
          selectEvent(null);
          document.body.style.overflow = "auto";
        }}
      ></div>
      <div className="w-screen h-screen lg:w-[800px] lg:h-[800px] bg-offWhite relative z-50">
        <section className="bg-tech-green w-full dog p-10 py-5 lg:h-[300px] flex flex-col justify-center  text-offWhite relative">
          <h1
            className="text-xl absolute top-10 right-10 cursor-pointer"
            onClick={() => {
              selectEvent(null);
              document.body.style.overflow = "auto";
            }}
          >
            x
          </h1>
          <h1 className="text-3xl text-offWhite">Event Details</h1>
          <hr className="h-[0.1rem] w-2/3 my-1 bg-offWhite" />
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <h1 className="bangers text-6xl tShadow mt-5">
                {selectedEvent.name}
              </h1>
              <h1 className="text-3xl bangers">
                {selectedEvent.date}, {selectedEvent.time}
              </h1>
            </div>
            <Image
              onClick={() => window.open(selectedEvent.regLink)}
              width={200}
              height={150}
              src="/events/register.png"
              alt="Event Registration"
              className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-44"
            />
          </div>
        </section>
        <div className="overflow-y-scroll h-[300px] md:h-[400px] lg:h-[450px] scrollbar">
          <section className="p-10 py-5">
            <div className="py-5">
              <h1 className="bangers text-black/90 text-3xl">Reg Fees</h1>
              <div className="flex gap-10 bangers text-2xl text-tech-primary">
                {selectedEvent.reg.map((prize, index) => (
                  <h1 key={index}>{prize}</h1>
                ))}
              </div>
            </div>
           
            <div className="py-5">
              <h1 className="bangers text-black/90 text-3xl">Prize Pool</h1>
              <div className="flex gap-10 bangers text-2xl text-tech-primary">
                {selectedEvent.prize.map((prize, index) => (
                  <h1 key={index}>{prize}</h1>
                ))}
              </div>
            </div>

            <div className="py-5">
              <h1 className="bangers text-black/90 text-3xl">Coordinator</h1>
              <div className="flex gap-10 bangers text-2xl text-tech-primary">
                {selectedEvent.cord.map((prize, index) => (
                  <h1 key={index}>{prize}</h1>
                ))}
              </div>
            </div>

          </section>
          <hr className="h-[0.1rem] w-[90%] mx-auto bg-black/20" />
          <section className="p-10 py-5">
            <h1 className="bangers text-black/90 text-3xl">Description</h1>
            <p className="dog text-xl text-tech-primary">
              {selectedEvent.desc}
            </p>
          </section>
          <section className="p-10 py-5 pt-0 dog ">
            <h1 className="bangers text-black/90 text-3xl">
              Rules and Regulations
            </h1>
            {selectedEvent.rules.map((rule, index) => (
              <h6 key={index} className="text-tech-primary text-2xl">
                <span className="font-sans">•</span> {rule}
              </h6>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventModal;

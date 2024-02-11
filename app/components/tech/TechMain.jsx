import Image from "next/image";
import AllEvents from "../events/AllEvents";

const TechMain = () => {
  return (
    <div className="flex justify-around items-center gap-10 p-20">
      <Image
        width={500}
        height={500}
        src="/eventsBanner.png"
        alt="Meh"
        className="w-44"
      />
      <h1 className="dog text-3xl text-tech-primary">
        More than 100 <br /> events to conquer
      </h1>
      <hr className="w-1/2 h-1 bg-tech-primary" />
      <Image
        width={500}
        height={500}
        src="/number01.png"
        alt="Meh"
        className="w-32"
      />
    </div>
  );
};

export default TechMain;

import React from "react";
import EventLog from "./EventLog";
import Image from "next/image";

const ScoreBoard = () => {
  const colorSpaces = {
    yellow: {
      fill: "#E2CE66",
      style:
        "fill:#E2CE66;fill:color(display-p3 0.886 0.808 0.4);fill-opacity:1;",
    },
    blue: {
      fill: "#91C1EC",
      style:
        "fill:#91C1EC;fill:color(display-p3 0.569 0.757 0.925);fill-opacity:1;",
    },
    red: {
      fill: "#FA9F9F",
      style:
        "fill:#FA9F9F;fill:color(display-p3 0.980 0.624 0.624);fill-opacity:1;",
    },
    green: {
      fill: "#9DB37A",
      style:
        "fill:#9DB37A;fill:color(display-p3 0.616 0.702 0.478);fill-opacity:1;",
    },
  };
  const tempScores = [
    {
      house: "green",
      position: "2st",
      event: "Music Mania",
      points: "250",
    },
    {
      house: "yellow",
      position: "1st",
      event: "Music Mania",
      points: "150",
    },
    {
      house: "red",
      position: "1st",
      event: "Music Mania",
      points: "50",
    },
    {
      house: "blue",
      position: "1st",
      event: "Music Mania",
      points: "350",
    },
  ];
  function calculatePoints(house) {
    let points = 0;
    tempScores.forEach((score) => {
      if (score.house === house) {
        points += Number(score.points);
      }
    });
    return points;
  }
  function toTitleCase(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
  return (
    <div className="flex p-8 md:flex-row flex-col">
      <div className="w-1/2 pt-10 md:px-10">
        <h1 className="text-7xl tracking-wider bangers text-[#FFE179] HeroTextMainTwo">
          Score board
        </h1>
        <p className="dog text-tech-primary text-3xl hidden md:block">
          Four teams, one trophy. The competition is <br /> fair and sqaure so
          that the win is deserved.
        </p>
        <div className="space-y-8 mt-5">
          {tempScores.map((score, index) => (
            <div
              key={index}
              className="w-[38.5rem] h-14 relative justify-center items-center p-5 md:flex hidden"
            >
              <EventLog
                colorLog={colorSpaces[score.house]}
                className="size-1"
              />
              <h1 className="relative z-10 md:text-4xl text-xl dog ">
                <span className="text-white">
                  {toTitleCase(score.house)} House
                </span>{" "}
                won <span className="text-white">{score.position}</span> in{" "}
                {score.event}{" "}
                <span className="text-white">+{score.points} pts</span>
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 md:block hidden">
        <div className="relative flex justify-center items-center flex-col">
          <div className="flex gap-20">
            <div className="relative">
              <Image
                src={"/varnam/score/red.png"}
                width={500}
                height={500}
                alt="Red score board"
                className="size-[300px] object-cover"
              />
              <h1 className="text-3xl bangers py-5 text-center">Red House</h1>
              <h1 className="text-5xl bangers absolute top-28 left-14">
                {calculatePoints("red")}
              </h1>
            </div>
            <div className="relative">
              <Image
                src={"/varnam/score/green.png"}
                width={500}
                height={500}
                alt="Red score board"
                className="size-[300px] object-cover"
              />
              <h1 className="text-3xl bangers py-5 text-center">Green House</h1>
              <h1 className="text-5xl bangers absolute top-32 left-14">
                {calculatePoints("green")}
              </h1>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="relative">
              <Image
                src={"/varnam/score/blue.png"}
                width={500}
                height={500}
                alt="Red score board"
                className="size-[300px] object-cover"
              />
              <h1 className="text-3xl bangers py-5 text-center">Blue House</h1>
              <h1 className="text-5xl bangers absolute top-28 right-10">
                {calculatePoints("blue")}
              </h1>
            </div>
            <div className="relative">
              <Image
                src={"/varnam/score/yellow.png"}
                width={500}
                height={500}
                alt="Red score board"
                className="size-[300px] object-cover"
              />
              <h1 className="text-3xl bangers py-5 text-center">
                Yellow House
              </h1>
              <h1 className="text-5xl bangers absolute top-24 right-10">
                {calculatePoints("yellow")}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="w-2/5 md:hidden">
          <div className="p-5 bg-yellow-200 rounded-xl ">
            <h1 className="text-4xl bangers text-yellow-400">Yellow House</h1>
            <h1 className="text-2xl bangers">{calculatePoints("yellow")}</h1>
          </div>
        </div>
        <div className="w-2/5 md:hidden">
          <div className="p-5 bg-red-200 rounded-xl ">
            <h1 className="text-4xl bangers text-red-400">red House</h1>
            <h1 className="text-2xl bangers">{calculatePoints("red")}</h1>
          </div>
        </div>
      
        <div className="w-2/5 md:hidden">
          <div className="p-5 bg-green-200 rounded-xl ">
            <h1 className="text-4xl bangers text-green-400">green House</h1>
            <h1 className="text-2xl bangers">{calculatePoints("green")}</h1>
          </div>
        </div>
        <div className="w-2/5 md:hidden">
          <div className="p-5 bg-blue-200 rounded-xl ">
            <h1 className="text-4xl bangers text-blue-400">blue House</h1>
            <h1 className="text-2xl bangers">{calculatePoints("blue")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;

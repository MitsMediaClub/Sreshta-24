"use client";
import React, { useEffect, useState } from "react";
import EventLog from "./EventLog";
import Image from "next/image";
import { supabase } from "@/utils/supabase";

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


  const [scores, setScores] = useState(null);

  
  
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/MitsMediaClub/Varnam-24-Score/main/score.csv');
        const csvData = await response.text();
        const rows = csvData.split('\n');
        const secondRow = rows[1].split(',');
        const values = rows[0].split(",").reduce((obj, key, index) => {
          obj[key] = secondRow[index];
          return obj;
        }, {});
        setScores(values);
        console.log(values, scores);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchScores();
  }, []);

  function calculatePoints(house) {
    if (!scores) return 0;
    return scores[house]  || 0;
  }
  function toTitleCase(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
  return (
    <div className="flex flex-col xl:flex-row p-5 md:p-8">
      <div className="xl:w-1/2 pt-10 md:px-10">
        <h1 className="text-7xl tracking-wider bangers text-[#FFE179] HeroTextMainTwo">
          Score board
        </h1>
        <p className="dog text-tech-primary text-3xl">
          Four teams, one trophy. The competition is fair and sqaure so that the
          win is deserved.
        </p>
        <div className="mt-5 flex gap-8 items-center h-96 overflow-y-scroll scrollbar flex-col-reverse">
          {/* {scores &&
            scores.map((score, index) => (
              <div
                key={index}
                className="w-[21rem] lg:w-[38.5rem] h-6 lg:h-16 relative flex justify-center items-center p-5"
              >
                <EventLog colorLog={colorSpaces[score.house]} />
                <h1 className="relative z-10 text-base lg:text-3xl dog ">
                  <span className="text-white">
                    {toTitleCase(score.house)} House
                  </span>{" "}
                  won <span className="text-white">{score.prize}</span> in{" "}
                  {score.event}{" "}
                  <span className="text-white">+{score.points} pts</span>
                </h1>
              </div>
            ))} */}
        </div>
      </div>
      <div className="xl:w-1/2 mt-5">
        <div className="relative flex justify-center items-center flex-col">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <div className="relative">
              <Image
                src={"/varnam/score/red.png"}
                width={500}
                height={500}
                alt="Red score board"
                className="size-[300px] object-cover"
              />
              <h1 className="text-3xl bangers py-5 text-center">Red House</h1>
              {scores && (
                <h1 className="text-7xl  dog absolute top-20 left-14">
                  {calculatePoints("red")}
                </h1>
              )}
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
              {scores && (
                <h1 className="text-7xl  dog absolute top-28 left-14">
                  {calculatePoints("green")}
                </h1>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <div className="relative">
              <Image
                src={"/varnam/score/blue.png"}
                width={500}
                height={500}
                alt="Red score board"
                className="size-[300px] object-cover"
              />
              <h1 className="text-3xl bangers py-5 text-center">Blue House</h1>
              {scores && (
                <h1 className="text-7xl  dog absolute top-20 right-10">
                  {calculatePoints("blue")}
                </h1>
              )}
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
              {scores && (
                <h1 className="text-7xl  dog absolute top-16 right-14">
                  {calculatePoints("yellow")}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;

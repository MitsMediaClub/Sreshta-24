import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

const Top = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-10 mobile:gap-1 p-20 mobile:p-4 mh:gap-4 mh:p-4">
        <Image
          width={500}
          height={500}
          src="/galleryheader.webp"
          alt="Meh"
          className="w-56 mobile:w-28"
        />
        <h1
          className={`${styles.dg_text} text-6xl mh:text-3xl mobile:text-lg text-tech-primary`}
        >
          Is past isn’t proof,<br />
           what else could be?
        </h1>
        <hr className="w-1/2 mh:w-1/4 mobile:w-1/6 h-1 bg-tech-primary" />
        <Image
          width={500}
          height={500}
          src="/headernum2.webp"
          alt="Meh"
          className="w-32 mobile:w-14 mh:w-24"
        />
      </div>
    </>
  );
};

export default Top;

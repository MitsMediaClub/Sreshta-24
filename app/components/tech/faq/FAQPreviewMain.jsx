"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./FAQPreviewMain.css";

export default function FAQPreviewMain() {
    const router = useRouter();
    const faqs = [
        {
          question: "WHAT IS SHRESHTA’24?",
          answer:
            "Shreshta’24 is an innovative and ingenious technical fest conducted by the Muthoot Institue of Technology and Science. Shreshta’24 aims at providing a platform for students, professionals, and tech enthusiasts to learn, collaborate, and engage with the latest trends and developments in technology.",
        },
        {
            question: "WHEN IS SHRESHTA’24?",
            answer:
              "Mark your calendars and clear out your schedules on the 29th February,1st and 2nd March because you are in for a treat at Shreshta’24.",
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };


    return(
        <div className="lg:p-24 pt-8">
            <div className="flex justify-between items-center gap-10 mobile:gap-1 p-5 mobile:p-4 mh:gap-4 mh:p-4">
        <Image
          width={500}
          height={500}
          src="/FAQheader.webp"
          alt="Meh"
          className="w-56 mobile:w-28"
        />
        <h1
          className={`dog text-6xl mh:text-3xl mobile:text-lg text-tech-primary`}
        >
         The more you know, <br/> the better!
        </h1>
        <hr className="w-1/2 mh:w-1/4 mobile:w-1/6 h-1 bg-tech-primary" />
        <Image
          width={500}
          height={500}
          src="/headernum4.webp"
          alt="Meh"
          className="w-32 mobile:w-14 mh:w-24"
        />
      </div>
      <div className="p-24">
      <div className="accordions">
              <ul className="accordions__list">
                {faqs.map(({ question, answer }, index) => (
                  <li
                    className={`accordions__item ${
                      openIndex === index ? "open" : ""
                    }`}
                    key={index}
                  >
                    <button
                      className="accordions__control"
                      aria-expanded={openIndex === index}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="accordions__title">{question}</span>
                      <span className="accordions__icon"></span>
                    </button>
                    <div
                      className="accordions__content"
                      aria-hidden={openIndex !== index}
                      style={{ maxHeight: openIndex === index ? "none" : "0" }}
                    >
                      <p>{answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
      </div>
      <div className="w-full rounded-lg"></div>
      <h1
        onClick={() => router.push("/faq")}
        className="text-center text-5xl font-bold bangers hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer pt-10"
      >
        Know More <span className="text-6xl">→</span>
      </h1>
        </div>
    );
};
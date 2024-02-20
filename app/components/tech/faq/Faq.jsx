'use client'

import React, { useState } from "react";
import "./faq.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const faqs = [
    {
      question: "WHAT IS SHRESTA’24?",
      answer:
        "Shresta’24 is an innovative and ingenious technical fest conducted by the Muthoot Institue of Technology and Science. Shresta’24 aims at providing a platform for students, professionals, and tech enthusiasts to learn, collaborate, and engage with the latest trends and developments in technology.",
    },
    {
      question: "WHEN IS SHRESTA’24?",
      answer:
        "Mark your calendars and clear out your schedules on the 29th February,1st and 2nd March because you are in for a treat at Shresta’24.",
    },
    {
      question: "DO WE HAVE A THEME FOR SHRESTA’24?",
      answer:
        "The theme we have chosen after much thought and deliberation for shresta’24 is COMICS cause who doesn’t want a platform that aims at providing networking and collaboration among artists, storytellers, technologists, and enthusiasts, fostering a vibrant and creative community and most importantly let us relive our childhoods.",
    },
    {
      question: "HIGHLIGHTS OF SHRESTA’24",
      answer:
        "At shresta’24 get ready to experience the adventure of a lifetime. Buckle up and get ready to experience once in a lifetime encounters such as band wars, eneria and a mind blowing theme show",
    },
    {
      question: "HOW CAN I REGISTER FOR SHRESTA’24?",
      answer:
        "Please fill out the registration form on the Shresta’24 website.",
    },
    {
      question: "WHAT CAN YOU GLEAN FROM SHRESTA’24?",
      answer:
        "Shresta’24 aims at discovering cut-edging technologies and how they are shaping the future as well as gain insights into industry trends from experts. Look forward to participate in workshops and hands-on activities. Most importantly connect with professionals, researchers, and other enthusiasts in the tech industry.",
    },
    {
      question: "ROUTE TO SHRESTA’24",
      answer:
        "Please visit the Shresta’24 website for more information on how to get to the event.",
    },
  ];

  return (
    <div className="faq">
      <div className="container">
        <div className="faq-wrapper">
        <h1 className='title'>FAQ</h1>
            <div className="process__intro intro">
            <div className="process__text text">Keep the questions coming, we’re here for you</div>
            </div>
          <div className="accordions">
            <ul className="accordions__list">
              {faqs.map(({ question, answer }, index) => (
                <li
                  className={`accordions__item ${openIndex === index ? "open" : ""}`}
                  key={index}
                >
                  <button
                    className="accordions__control"
                    aria-expanded={openIndex === index}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="accordions__number">{index + 1}</span>
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
      </div>
      <section className="section location">
        <br/><br/>
        <h2 className="section-title">How to get here?</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125748.46657650663!2d76.25601409726565!3d9.963914800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0874de563bc58b%3A0xde7ecbfa110cfbda!2sMuthoot%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1708221925095!5m2!1sen!2sin"  loading="eager" ></iframe>
      </section>
    </div>
  );
}
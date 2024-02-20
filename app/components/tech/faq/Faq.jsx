'use client'

import * as React from 'react';
import './faq.css';
import Image from 'next/image';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <section className="process">
      <h1 className='title'>FAQ</h1>
      <div class="process__intro intro">
      <div className="process__text text">
  Keep the questions coming, we’re here for you
</div>
    </div>
        <div className="process__container">
            <div className="process__accordions">
              <ul className="accordions__list">
                <li className={`accordions__item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="accordions__control" 
                    aria-expanded={isOpen}
                    onClick={toggleAccordion}
                  >
                    <span className="accordions__number">01</span>
                    <span className="accordions__title">WHAT IS SHRESTA’24 ?</span>
                    <span className="accordions__icon"></span>
                  </button>
                  <div 
                    className="accordions__content" 
                    aria-hidden={!isOpen}
                    style={{ maxHeight: isOpen ? 'none' : '0' }}
                  >
                    <p>
                    Shresta’24 is an innovative and ingenious technical fest conducted by the Muthoot 
                    Institue of Technology and Science. Shresta’24  aims at providing a platform for students, 
                    professionals, and tech enthusiasts to learn, collaborate, and engage with the latest trends and 
                    developments in technology.
                    </p>
                  </div>
                </li>
                <li className={`accordions__item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="accordions__control" 
                    aria-expanded={isOpen}
                    onClick={toggleAccordion}
                  >
                    <span className="accordions__number">02</span>
                    <span className="accordions__title">WHEN IS SHRESTA’24?</span>
                    <span className="accordions__icon"></span>
                  </button>
                  <div 
                    className="accordions__content" 
                    aria-hidden={!isOpen}
                    style={{ maxHeight: isOpen ? 'none' : '0' }}
                  >
                    <p>
                    Mark your calendars and clear out your schedules on the 
                    29th February,1st and 2nd March because you are in for a treat at Shresta’24
                    </p>
                  </div>
                </li>
                
              </ul>
            </div>
        </div>
      </section>

      <section className="section location">
        <h2 className="section-title">How to get here?</h2>
        <p className="section-content">&gt; Bus - Every 40 mins from Ernakulam south</p>
        <p className="section-content">&gt; Train - Thripunithura railway station</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125748.46657650663!2d76.25601409726565!3d9.963914800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0874de563bc58b%3A0xde7ecbfa110cfbda!2sMuthoot%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1708221925095!5m2!1sen!2sin"  loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
}
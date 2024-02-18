"use client"

import './faq.css'

export default function Faq() {
  const toggleAnswer = (e) => {
    const question = e.target.closest('.question');
    const answer = question.nextElementSibling;

    answer.classList.toggle('active');
  };

  return (
    <div className="faq">
      <div className="question" onClick={toggleAnswer}>
        What is Shrestha'24?
      </div>
      <div className="answer">
        Shrestha'24 is a 24-hour hackathon organized by Muthoot College of Engineering and Technology.
      </div>

     <section className="section location">
            <h2 className="section-title">How to get here?</h2>
            <p className="section-content">&gt; Bus - Every 40 mins from Ernakulam south</p>
            <p className="section-content ">&gt; Train - Thripunithura railway station</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125748.46657650663!2d76.25601409726565!3d9.963914800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0874de563bc58b%3A0xde7ecbfa110cfbda!2sMuthoot%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1708221925095!5m2!1sen!2sin"  loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
  )
}
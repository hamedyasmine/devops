import React, { useState, useEffect } from "react";
import QuestionsItem from "../components/QuetionsItem";

function Questions() {
  const [faqItems, setFaqItems] = useState([ {
    question: "Our Address?",
    answer: "ConvergeInnov located between France, Tunisia, Doha And Qatar.",
  },
  {
    question: "Our Role?",
    answer: "Our team is committed to crafting pioneering solutions that seamlessly integrate cutting-edge technologies with strategic insights.",
  },
  {
    question: "Services?",
    answer: "XR Technologies Integration\nGame Development\nApplication Development\nDigital Provider & Marketing Support\nDigital Solutions\nInnovation Strategies\nAgile Transformation\nRisk Management & Cybersecurity\nTransformation DevOps & Cloud",
  },
  {
    question: "Our Passion?",
    answer: "At ConvergeInnov, we are passionate about driving innovation and excellence in the digital realm.",
  },]);
  const mockFaqData = [
   
  ];

  //useEffect(() => {
   

   // setFaqItems(mockFaqData);
  //}, []);

  return (
    <>
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Repeated questions</p>
          </div>
          {faqItems.map((mockFaqData, index) => (
          
          <QuestionsItem question={mockFaqData.question} description={mockFaqData.answer} index={index}/> 
        ))}
        </div>
      </section>
    </>
  );
}

export default Questions;

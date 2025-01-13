import React, { useState } from "react";
import QuestionsItem from "../../components/QuetionsItem";

function Questions() {
  const [faItems] = useState([
    {
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
    },
  ]);

  // État local pour gérer l'ouverture des questions
  const [isOpen, setIsOpen] = useState(Array(faItems.length).fill(false));

  // Fonction pour basculer l'état d'ouverture d'une question spécifique
  const toggleQuestion = (index) => {
    const newState = [...isOpen];
    newState[index] = !newState[index];
    setIsOpen(newState);
  };

  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Repeated questions</p>
        </div>
        {faItems.map((item, index) => (
          <QuestionsItem
            key={index} // Assure-toi d'ajouter une clé unique pour chaque élément dans un tableau
            question={item.question}
            answer={item.answer}
            isOpen={isOpen[index]} // Propriété pour indiquer si la question est ouverte ou fermée
            toggleQuestion={() => toggleQuestion(index)} // Fonction pour basculer l'état d'ouverture
          />
        ))}
      </div>
    </section>
  );
}

export default Questions;

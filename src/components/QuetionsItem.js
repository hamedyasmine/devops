// QuestionsItem.jsx (composant QuestionsItem)

import React from "react";

const QuestionsItem = ({ question, answer, isOpen, toggleQuestion }) => (
  <div className="question">
    <div className="question-header" onClick={toggleQuestion}>
      <h4>{question}</h4>
      <span className={isOpen ? "bx bx-chevron-up icon-show" : "bx bx-chevron-down icon-show"} />
    </div>
    {isOpen && <p className="answer">{answer}</p>}
  </div>
);

export default QuestionsItem;

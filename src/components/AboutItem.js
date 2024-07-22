// AboutItem.js
import React from 'react';

function AboutItem(props) {
  return (
    <div>
      <i className="bi bi-check-circle" /> {props.title}
      <p>{props.description}</p>
      </div>
    
  );
}

export default AboutItem;

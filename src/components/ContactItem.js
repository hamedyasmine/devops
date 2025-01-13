import React from "react";

function ContactItem(props) {
  return (
    <div className="info-box mb-4">
      <i className={props.icon} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ContactItem;

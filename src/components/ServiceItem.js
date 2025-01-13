import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceItem({ title, icon, description }) {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
      <div className="icon-box">
        {icon && <FontAwesomeIcon icon={icon} className="icon" />} {/* Affichage de l'icône */}
        <h4><a href="">{title}</a></h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;

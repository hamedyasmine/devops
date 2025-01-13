import React from "react";
import DegitalItem from "../../components/DegitalItem";

function DigitalS() {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Digital Solutions:</h2>
          <p>Our customized digital solutions leverage XR tech, game development, and app expertise to meet specific client requirements.</p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
            <IconBox
              iconClass="bx bx-receipt"
              title="Real Estate Projects:"
              description="We provide end-to-end solutions for real estate, from application development to VR visualization and digital property management."
              delay={100}
            />
            <IconBox
              iconClass="bx bx-cube-alt"
              title="Digital Provider & Marketing Support:"
              description="Our support extends to digital marketing strategies, utilizing new technologies for effective brand outreach."
              delay={200}
            />
            <IconBox
              iconClass="bx bx-images"
              title="Innovation Strategies:"
              description="Collaboratively developing strategies that harness the latest tech to boost market competitiveness is our forte."
              delay={300}
            />
            <IconBox
              iconClass="bx bx-shield"
              title="Brand Strategy:"
              description="Crafting and implementing strategic brand approaches that align with business goals and resonate with target audiences."
              delay={400}
            />
          </div>
          <div className="image col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={100}>
            <img src="assets/img/features.svg" alt="Features" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}


const IconBox = ({ iconClass, title, description, delay }) => (

  <DegitalItem iconClass={iconClass} title={title} description={description} delay={delay}/>
);

export default DigitalS;

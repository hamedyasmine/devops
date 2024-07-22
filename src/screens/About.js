
import React, { useState, useEffect } from 'react';
import AboutItem from '../components/AboutItem'; // Assuming they are in the same directory

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      const dummyData = [
        { title: 'XR Technologies Integration', description: 'We empower businesses to not just adapt but thrive in todays fast-paced and competitive digital landscape. Our mission is to deliver exceptional value to our clients.' },
        { title: 'Application design & digital marketing.', description: 'Our mission is to deliver exceptional value to our clients, helping them achieve their goals and stay ahead of the curve in the ever-evolving world of technology and business.' },

      ];
      setAbout(dummyData);
    };
    fetchData();
  }, []);
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={150}>
            <img src="assets/img/about.jpg" className="img-fluid" alt="About Us" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>About Us</h3>
            <p className="fst-italic">
              At ConvergeInnov, we are passionate about driving innovation and excellence in the digital realm. Our team is committed to crafting pioneering solutions that seamlessly integrate cutting-edge technologies with strategic insights.
            </p>
            {about.map((about, index) => (
                 <AboutItem title={about.title} description={about.description} index={index}/> 
                ))}
      
            <a href="#" className="read-more">Read More <i className="bi bi-long-arrow-right" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

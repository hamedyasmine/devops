import React from 'react';

function Hero() {
  const GAMEDEVELOPMENT = ['XR TECHNOLOGIES INTEGRATION', 'GAME DEVELOPMENT', 'DIGITAL SOLUTIONS', 'WEB APPS', 'MOBILE APPS'];

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" id="phraseContainer">
            <h1>We Love To Build</h1>
            <h2 id="phrase1">{GAMEDEVELOPMENT[0]}</h2>
            <h2 id="phrase2" style={{ display: 'none' }}>{GAMEDEVELOPMENT[1]}</h2>
            <h2 id="phrase3" style={{ display: 'none' }}>{GAMEDEVELOPMENT[2]}</h2>
            <h2 id="phrase4" style={{ display: 'none' }}>{GAMEDEVELOPMENT[3]}</h2>
            <h2 id="phrase5" style={{ display: 'none' }}>{GAMEDEVELOPMENT[4]}</h2>
            <div><a href="#about" className="btn-get-started scrollto">About Us</a></div>
          </div>
          <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={150}>
            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

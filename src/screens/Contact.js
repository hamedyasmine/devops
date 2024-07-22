import React, { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: false,
    success: false
  });

  useEffect(() => {
    if (formStatus.success) {
      const timer = setTimeout(() => {
        setFormStatus({ ...formStatus, success: false });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, error: false, success: false });

   
    setTimeout(() => {
      setFormStatus({ loading: false, error: false, success: true });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>ConvergeInnov, innovating future together: A dynamic and innovative startup, with offices strategically located between France, Tunisia, and Doha, Qatar.</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map" />
              <h3>Our Address</h3>
              <p>
                France : 135 Rue DU PLESSIS BOUCHARD<br/>
                95130 FRANCONVILLE<br/>
                Phone +33 6 67 56 38 80<br/><br/>

                Tunisia : B19 Pole technologique 4054 Sahloul<br/>
                Sousse +216 20128687 /+216 29891161<br/><br/>

                Qatar Doha : +974 50690165
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope" />
              <h3>Email Us</h3>
              <p>contact@convergeinnov.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-phone-call" />
              <h3>Call Us</h3>
              <p>+33 6 67 56 38 80<br/>+216 20 128 687</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <iframe
              title="Google Maps"
              className="mb-4 mb-lg-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameBorder={0}
              style={{ border: 0, width: '100%', height: 384 }}
              allowFullScreen
            />
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-control"
                  rows={5}
                  placeholder="Message"
                  required
                />
              </div>
              <div className="my-3">
                {formStatus.loading && <div className="loading">Loading</div>}
                {formStatus.error && <div className="error-message">Error sending message</div>}
                {formStatus.success && <div className="sent-message">Your message has been sent. Thank you!</div>}
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

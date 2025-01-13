import React from 'react';
import logoconv from '../../logoconv.png';

function Footer() {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>ConvergeInnov</h3>
                <p>
                  France : 135 Rue DU PLESSIS BOUCHARD<br />
                  95130 FRANCONVILLE<br />
                  Phone +33 6 67 56 38 80<br /><br/>Tunisia : B19 Pole technologique 4054 Sahloul Sousse<br />Phone: +216 20128687 /+216 29891161<br/><br/>Qatar Doha : +974 50690165<br/>
               
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Follow Us</h4>
                <ul>
                  <li><a href="https://x.com/ConvergeinnovT" className="twitter"><i className="bx bxl-twitter" /></a></li>
                  <li><a href="https://www.facebook.com/ConvergeInnov" className="facebook"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/company/convergeinnov" className="linkedin"><i className="bx bxl-linkedin" /></a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>SUBSCRIBE NEWSLETTER</h4>
                <form action="#" method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
                <div className="logo">
                  <a href="index.html">
                    <img src={logoconv} alt="Logo" className="footer-logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright-wrap d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
              <div className="copyright">
                © Copyright <strong><span>2024</span></strong>. All Rights Reserved
              </div>
              <div className="credits">
                Powered By ConvergeInnov
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}

export default Footer;

import About from "./About";
import Hero from "./Hero";
import Services from "./Services";
import DegitalS from "./DegitalS";
import Contact from "./Contact";
import Questions from "./Quetions";
import Counts from "./Counts";

function Home() {
    return (
       <div>
{/* ======= Hero Section ======= */}
        <Hero/>
  <main id="main">
       <About/>
    {/* ======= Counts Section ======= */}
 <Counts/>
 {
 /* End Counts Section */}
    {/* ======= Services Section ======= */}
    <Services/>
    {/* End Services Section */}
    {/* ======= Features Section ======= */}
    <DegitalS/>
  {/* End Features Section */}
    {/* ======= Testimonials Section ======= */}
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>founder</h2>
          <p>ConvergeInnov, innovating future together: A dynamic and innovative startup, with offices strategically located between France, Tunisia, and Doha, Qatar.</p>
        </div>
        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>{/* End testimonial item */}
           
          </div>
        </div>
      </div>
    </section>{/* End Testimonials Section */}
    
    
    {/* ======= Frequently Asked Questions Section ======= */}
   <Questions/>
   {/* End Frequently Asked Questions Section */}
    {/* ======= Contact Section ======= */}
    <Contact/>
  {/* End Contact Section */}
  </main>{/* End #main */}</div>


    );
  }
  
  export default Home;
  
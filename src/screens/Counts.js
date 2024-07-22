import React, { useEffect } from "react";

function Counts() {
  useEffect(() => {
   
    const counters = document.querySelectorAll(".purecounter");
    counters.forEach(counter => {
      const start = parseInt(counter.getAttribute("data-purecounter-start") || 0);
      const end = parseInt(counter.getAttribute("data-purecounter-end") || 0);
      const duration = parseInt(counter.getAttribute("data-purecounter-duration") || 2); 

      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration * 1000 / range));

      const timer = setInterval(() => {
        current += increment;
        counter.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);

     
      counter.textContent = start;
    });
  }, []);

  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter"></span>
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={300} data-purecounter-duration={1} className="purecounter"></span>
            <p>Projects</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={1300} data-purecounter-duration={1} className="purecounter"></span>
            <p>Hours Of Support</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter"></span>
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counts;

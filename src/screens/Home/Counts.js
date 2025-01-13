import React, { useState, useEffect, useRef } from "react";

function Counts() {
  const [countersState, setCountersState] = useState([
    { start: 0, end: 232, duration: 1, isCounting: false },
    { start: 0, end: 300, duration: 1, isCounting: false },
    { start: 0, end: 1300, duration: 1, isCounting: false },
    { start: 0, end: 15, duration: 1, isCounting: false },
  ]);

  const countersRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          startCounter(index);
        }
      });
    }, options);

    countersRef.current.forEach((item) => {
      observer.observe(item);
    });

    
    return () => {
      observer.disconnect();
    };
  }, []);

  const startCounter = (index) => {
    if (!countersState[index].isCounting) {
      const newState = [...countersState];
      newState[index].isCounting = true;
      setCountersState(newState);

      const { start, end, duration } = countersState[index];
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration * 1000 / range*2));

      const timer = setInterval(() => {
        current += increment;
        newState[index].current = current;
        setCountersState(newState);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  };

  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row counters">
          {countersState.map((counter, index) => (
            <div
              key={index}
              className="col-lg-3 col-6 text-center"
              ref={(element) => (countersRef.current[index] = element)}
              data-index={index}
            >
              <span className="purecounter">
                {counter.isCounting ? counter.current : counter.start}
              </span>
              <p>
                {index === 0 && "Clients"}
                {index === 1 && "Projects"}
                {index === 2 && "Hours Of Support"}
                {index === 3 && "Hard Workers"}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Counts;

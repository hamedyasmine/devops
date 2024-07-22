import React, { useState, useEffect } from 'react';
import ServiceItem from '../components/ServiceItem';


function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const dummyData = [
        { title: 'XR Technologies Integration', description: 'combines virtual reality, augmented reality, and mixed reality to create immersive and interactive experiences."' },
        { title: 'Game Development', description: 'the process of creating video games.It involves a range of disciplines and skills' },
        { title: 'Application Development', description: 'the process of  creating software applications that run on various platforms such as desktop computers, mobile devices, web browsers, and embedded systems' },
        { title: 'Digital Provider & Marketing Support', description: 'involves services related to digital content delivery and promotional activities' },
        { title: 'Digital Solutions', description: 'refers to technologies, strategies, and services that leverage digital platforms to address specific business needs or challenges' },
        { title: 'Innovation Strategies', description: 'involve methods to generate new ideas, develop innovative products or services, improve processes, and stay ahead of competitors in the market.' },
        { title: 'Agile Transformation', description: 'refers to the process of transitioning an organizations culture, processes, and mindset to adopt Agile principles and practices' },
        { title: 'Risk Management & Cybersecurity', description: ' critical components of protecting organizational assets and ensuring operational continuity in the digital age.' },
        { title: 'Transformation DevOps & Cloud', description: 'refers to the integration and evolution of DevOps practices in conjunction with cloud computing technologies within an organization.' },
      ];
      setServices(dummyData);
    };
    fetchData();
  }, []);

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="row gy-4">
          {services.map((service, index) => (
            // <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
            //   <div className="icon-box iconbox-blue">
            //     <div className="icon">
            //       <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            //         <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174" />
            //       </svg>
            //       <i className="bx bxl-dribbble" />
            //     </div>
            //     <h4><a href="#">{service.title}</a></h4>
            //     <p>{service.description}</p>
            //   </div>
            // </div>
            <ServiceItem title={service.title} description={service.description} index={index}/> 
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

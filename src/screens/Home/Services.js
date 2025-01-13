import React, { useState, useEffect } from 'react';
import ServiceItem from '../../components/ServiceItem';
import { faLaptop,faMobile,faComments,faGamepad , faPaintRoller, faDigitalTachograph,faChartLine ,faRetweet ,faShieldAlt, faCogs } from '@fortawesome/free-solid-svg-icons'; // Exemple d'icône pour un ordinateur portable



function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const dummyData = [
        { title: 'XR Technologies Integration', description: 'Combines virtual reality, augmented reality, and mixed reality to create immersive and interactive experiences.', icon: faLaptop },
        { title: 'Game Development', description: 'The process of creating video games. It involves a range of disciplines and skills.',icon:faGamepad  },
        { title: 'Application Development', description: 'The process of creating software applications that run on various platforms such as desktop computers, mobile devices, web browsers, and embedded systems.', icon: faComments},
        { title: 'Digital Provider & Marketing Support', description: 'Involves services related to digital content delivery and promotional activities.',icon:faPaintRoller  },
        { title: 'Digital Solutions', description: 'Refers to technologies, strategies, and services that leverage digital platforms to address specific business needs or challenges.',icon: faDigitalTachograph },
        { title: 'Innovation Strategies', description: 'Involve methods to generate new ideas, develop innovative products or services, improve processes, and stay ahead of competitors in the market.', icon: faChartLine  },
        { title: 'Agile Transformation', description: 'Refers to the process of transitioning an organization\'s culture, processes, and mindset to adopt Agile principles and practices.', icon: faRetweet },
        { title: 'Risk Management & Cybersecurity', description: 'Critical components of protecting organizational assets and ensuring operational continuity in the digital age.', icon: faShieldAlt  },
        { title: 'Transformation DevOps & Cloud', description: 'Refers to the integration and evolution of DevOps practices in conjunction with cloud computing technologies within an organization.', icon:  faCogs },
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
        
          <div className='icon'>
          <div className="row gy-4">
          {services.map((service, index) => (
            <ServiceItem key={index} title={service.title} icon={service.icon}   description={service.description} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Services;


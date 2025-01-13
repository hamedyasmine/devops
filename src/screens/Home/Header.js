import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderItem from '../../components/HeaderItem';
import logoconv from '../../logoconv.png';
import loginIcon from '../../logo-login.jpg';

function Header() {
  const [scrollClass, setScrollClass] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScrollClass('scrolled');
      } else {
        setScrollClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const head = [
    { href: '#hero', title: 'Accueil' },
    { href: '#about', title: 'À propos' },
    { href: '#services', title: 'Services' },
    { href: '#faq', title: 'Questions' },
    { href: '#contact', title: 'Contact' },
  ];

 // Array of paths where the navbar should be hidden
 const pathsToHideNavbar = ['/Login1', '/Dashboard','/services','/number','/map','/message'];
  
 // Check if the current path is in the pathsToHideNavbar array
 const shouldHideNavbar = pathsToHideNavbar.includes(location.pathname);

 if (shouldHideNavbar) {
   return null;
 }

  return (
    <div className={`hero_area ${scrollClass}`}>
      <header id="header" className={`fixed-top ${scrollClass}`}>
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="/">
              <img src={logoconv} alt="Logo" />
            </Link>
          </h1>
          <nav id="navbar" className={`navbar ${scrollClass}`}>
            {head.map((item, index) => (
              <HeaderItem key={index} href={item.href} title={item.title} />
            ))}
            <Link to="/Login1" className="login-icon">
              <img src={loginIcon} alt="Login" height={5} />
            </Link>
          </nav>
          <i className="bi bi-list mobile-nav-toggle" />
        </div>
      </header>
    </div>
  );
}

export default Header;

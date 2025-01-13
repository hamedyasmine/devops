import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './screens/Home/Header';
import Home from './screens/Home/Home';
import Login1 from './screens/Authentication/Login1';
import Footer from './screens/Home/Footer';
import HomeAd from './screens/Dashboard/HomeAd';
import ServicesPage from './screens/Dashboard/screens/ServicesPage.js';
import NumberPage from './screens/Dashboard/screens/NumberPage.js';
import MapPage from './screens/Dashboard/screens/MapPage.js';
import MessagePage from './screens/Dashboard/screens/MessagePage.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login1" element={<Login1 />} />
          <Route path="/Dashboard" element={<HomeAd />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/number" element={<NumberPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/message" element={<MessagePage />} />
         
        </Routes>
        
      </div>
      
    </Router>
    
  );
}

export default App;

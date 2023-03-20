import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './Homepage.css';
import OurServices from '../Services/OurServices';

function Homepage() {
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef(null);

  const handleExploreClick = () => {
    setShowServices(!showServices);
    if (!showServices) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Homepage">
      <div className='Title-header'>
        <h1>E-Kunjo</h1>
        <h3>A GOOD HELP FOR PLANT-LOVERS</h3>
        <button id='explore-button' onClick={handleExploreClick}>Explore</button>
      </div>
      <div ref={servicesRef} className="Services">
        <OurServices />
      </div>
    </div>
  );
}

export default Homepage;

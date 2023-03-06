import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import './Homepage.css';
import '../Services/FindNursery.js';

function Homepage() { 
    const nav=useNavigate(); 
    const goToServices=()=>{
      nav('/services');
    }
    return (
      <div className="Homepage">
        <header className="Homepage-header">
          <h1>E-KUNJO</h1>
          <h3>A GOOD HELP FOR PLANT-LOVERS</h3>
        </header>
        <body className="Homepage-body">
          <div className='Homepage-Servdiv' id='Homepage-OurServices'>
            <h1>Our Services</h1>
          </div>
          <div className='Homebody-Servdiv'>
              <div><button className='App-Servbtn' onClick={goToServices}>Find Nursery</button></div>
              <div><button className='App-Servbtn'>Get Plant Information</button></div>
              <div><button className='App-Servbtn'>Get Fertilizer Amount</button></div>
              <div><button className='App-Servbtn'>Detect Disease</button></div>
          </div>
          <span id='Livespan'>To Contact with Support, please join our </span><button>Live chat</button>
        </body>
      </div>
    );
  }
  
  export default Homepage;
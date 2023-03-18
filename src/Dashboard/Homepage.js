import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import './Homepage.css';
import '../Services/FindNursery/FindNursery.js';
import '../Services/PlantInfo/PlantInfo.js';
import '../Services/Authentication/Registration/Registration.js';
import Navbar from '../Component/navbar';

function Homepage() { 
    const nav=useNavigate(); 
    const findNurseryfunction=()=>{
      nav('/services/FindNursery');
    }
    const getPlantInfofunction=()=>{
      nav('/services/PlantInfo');
    }
    
    // return (
    //   <div className="Homepage">
    //     <Navbar/>
    //     <header className="Homepage-header">
    //       <h1>E-KUNJO</h1>
    //       <h3>A GOOD HELP FOR PLANT-LOVERS</h3>
    //     </header>
    //     <body className="Homepage-body">
    //       <div className='Homepage-Servdiv' id='Homepage-OurServices'>
    //         <h1>Our Services</h1>
    //       </div>
    //       <div className='Homebody-Servdiv'>
    //           <div><button className='App-Servbtn' onClick={findNurseryfunction}>Find Nursery</button></div>
    //           <div><button className='App-Servbtn' onClick={getPlantInfofunction}>Get Plant Information</button></div>
    //           <div><button className='App-Servbtn'>Get Fertilizer Amount</button></div>
    //           <div><button className='App-Servbtn'>Detect Disease</button></div>
    //       </div>
    //       <span id='Livespan'>To Contact with Support, please join our </span><button>Live chat</button>
    //     </body>
    //   </div>
    //);
  }
  
  export default Homepage;
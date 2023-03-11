import React from 'react'
import { useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import MatchName from './MatchName.js';
import './Plantinfo.css';

function PlantInfo(){   
  const [plant, setPlant] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plant);
    alert(plant);
  }

  return(
    <form action='Matchname.js' method="Post">
        <div>
          <label htmlFor="header-search">
              <p className="visually-hidden">Enter Plant Name: </p>
          </label>
          <input
              type="text"
              id="header-search"
              placeholder="ex: Mango"
              name="searchbar" 
              onChange={e => setPlant(e.target.value)}
              required
          />
          <br/><br/>
          <button type="submit">Search</button>
        </div>
    </form>
  );
 
}

export default React.memo(PlantInfo)

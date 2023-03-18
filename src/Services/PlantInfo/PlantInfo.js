import React from 'react'
import { useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import MatchName from './MatchName';
import './Plantinfo.css';

export default function PlantInfo(){   
  const [plant, setPlant] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    MatchName(plant);
  }

  return(
    <form onSubmit={handleSubmit} method="Post">
        <div>
          <label htmlFor="header-search">
              <p className="visually-hidden">Enter Plant Name: </p>
          </label>
          <input
              type="text"
              id="header-search"
              placeholder="ex: Mango"
              name="searchbar"
              value={plant} 
              onChange={e => setPlant(e.target.value)}
              required
          />
          <br/><br/>
          <button type="submit">Search</button>
        </div>
    </form>
  );
 
}

//export default React.memo(PlantInfo)

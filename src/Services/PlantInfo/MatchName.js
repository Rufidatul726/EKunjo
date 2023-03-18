import React from "react";
import { useState } from "react";
import { ReactDOM } from "react-dom/client";
import "./PlantInfo.js";


function MatchName(props) {
    const [plant, setPlant] = useState([]);
    return (
        console.log(props.plants),
        alert("Match Name"),
        <div>
            <h1>Match Name</h1>
        </div>
    );
}

export default MatchName;
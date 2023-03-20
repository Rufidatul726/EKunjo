import React from "react";
import { useRef } from "react";
import "./OurServices.css";
import PlantInfo from "./PlantInfo/PlantInfo";
import ShowNursery from "./FindNursery/ShowNursery";
import GetFertilizerAmount from "./GetFertilizerAmount/GetFertilizerAmount";

export default function OurServices() {
    const [lastClicked, setLastClicked] = React.useState(null);
    const [clickPlant, setClickPlant] = React.useState(false);
    const [clickNursery, setClickNursery] = React.useState(false);
    const [clickFertilizer, setClickFertilizer] = React.useState(false);
    const [clickDisease, setClickDisease] = React.useState(false);

    const clickPlantRef = React.useRef(null);
    const clickNurseryRef = React.useRef(null);

    const handleFindNurseryClick = () => {  
        setClickPlant(null);
        setClickFertilizer(null);
        setClickNursery(!clickNursery);
        if(!clickNursery){
            console.log(clickNurseryRef.current);
            clickNurseryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleGetPlantDetailsClick = () => {
        setClickPlant(!clickPlant);
        setClickNursery(null);
        setClickFertilizer(null);
        if(!clickPlant){
            console.log(clickPlantRef.current);
            
            clickNurseryRef.current=null;
            clickPlantRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleMeasureFertilizer = () => {
        setClickFertilizer(!clickFertilizer);
        setClickNursery(null);
            setClickPlant(null);
        if(!clickFertilizer && clickPlantRef.current!==null){
            console.log(clickPlantRef.current);
            
            clickPlantRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const clearLastClicked = () => {
        setLastClicked(null);
    };

    return (
        <div className="Services">
            <h2>Our Services</h2>
            <div className="Service-type">
                <button onClick={handleFindNurseryClick}>Find a Nursery</button>
                <button onClick={handleGetPlantDetailsClick}>Get Details of a Plant</button>
                <button onClick={handleMeasureFertilizer}>Measure Fertilizer Amount</button>
                <button>Get Disease of Plant</button>
            </div>
            <div className="Service-description">
                {clickNursery && <ShowNursery/>}
                {clickPlant && <PlantInfo />}
                {clickFertilizer && <GetFertilizerAmount />}
            </div>
            {/* <div className="Service-type">
                <button onClick={handleClick("FindNursery")}>Find a Nursery</button>
                <button onClick={handleClick("PlantInfo")}>Get Details of a Plant</button>
                <button onClick={handleClick("GetFertilize")}>Measure Fertilizer Amount</button>
                <button>Get Disease of Plant</button>
            </div> */}
        </div>
    );
}
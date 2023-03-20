import React from "react";
import { useNavigate } from "react-router-dom";
import FindNursery from "./FindNursery";

export default function ShowNursery() {
    const navigate = useNavigate();
    
    return (
        <div>
            <button onClick={() => navigate("../Services/FindNursery")}>Click here to see nearby Nurseries!</button>
        </div>
    );
}


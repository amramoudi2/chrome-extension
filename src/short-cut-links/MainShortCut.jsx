import {useState} from "react";
import "../index.css"
import plusPng from "../assets/plus.svg";

export default function MainShortCut(){
    const [displayAdd, setDisplayAdd] = useState(false);

    function toggleAdd(){
        setDisplayAdd(!displayAdd);
    }

    return (
        <div>
            <div onClick={toggleAdd} className={"add"}>
                <img src={plusPng} alt="add"/>
            </div>
            <div style={{display: displayAdd ? "block" : "none"}} id={"add--menu"} className={"settings"}>
                <h2 className={"close add--close"} onClick={() => setDisplayAdd(false)}>X</h2>
            </div>
        </div>
    )
}
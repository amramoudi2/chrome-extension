import {useState, useEffect} from "react";
import Weather from "./Weather.jsx";
import BackgoundPhoto from "./BackgoundPhoto.jsx";
import AdviceAPI from "./AdviceAPI.jsx";
import MainSection from "./MainSection.jsx";
import settingsSvg from "./assets/settings.svg"
import "./index.css"
import TimeDisplayFormat from "./settingsOptions/TimeDisplayFormat.jsx";
import DisplayTimeBy from "./settingsOptions/displayTimeBy.jsx";

export default function App() {

    const [displaySettings, setDisplaySettings] = useState(false);
    const [displayTimeBy, setDisplayTimeBy] = useState(
        JSON.parse(localStorage.getItem("displayTimeBy")) || "medium");
    const [hours, setHours] = useState(
        JSON.parse(localStorage.getItem("is24Hours")) || false);

    function handleCheckBoxClick(e){
        let value = e.target.checked;
        if(displayTimeBy === "small"){
            setDisplayTimeBy("short")
            localStorage.setItem("displayTimeBy", JSON.stringify("short"));
        }
        setHours(value)
        localStorage.setItem("is24Hours", JSON.stringify(value));
    }

    function handleRadioClick(e){
        let value = e.target.value;
        setDisplayTimeBy(value)
        localStorage.setItem("displayTimeBy", JSON.stringify(value));
    }


    function toggleSettings() {
        setDisplaySettings(!displaySettings);
    }


    return (
        <div className={"background--holder"}>
            <header>
                <Weather/>
                <AdviceAPI/>
            </header>
            <main>
                <MainSection displayTimeBy={displayTimeBy} is24Hours={hours}/>
            </main>
            <BackgoundPhoto />
            <div style={{display: displaySettings ? "block" : "none"}} className="settings">
                <h1 className={"close"} onClick={() => setDisplaySettings(false)}>X</h1>
                <TimeDisplayFormat
                    hours = {hours}
                    handleClick = {handleCheckBoxClick}
                />
                <DisplayTimeBy
                    displayTimeBy = {displayTimeBy}
                    handleClick = {handleRadioClick}
                    hours={hours}
                />
            </div>
            <button onClick={toggleSettings}><img src={settingsSvg} alt="settings"/></button>
        </div>
    )
}
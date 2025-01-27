import {useState} from "react";
import Weather from "./apis/Weather.jsx";
import BackgoundPhoto from "./apis/BackgoundPhoto.jsx";
import AdviceAPI from "./apis/AdviceAPI.jsx";
import MainSection from "./MainSection.jsx";
import settingsSvg from "./assets/settings.svg"
import TimeDisplayFormat from "./settingsOptions/TimeDisplayFormat.jsx";
import DisplayTimeBy from "./settingsOptions/displayTimeBy.jsx";
import "./index.css"

export default function App() {

    const [displaySettings, setDisplaySettings] = useState(false);
    const [displayTimeBy, setDisplayTimeBy] = useState(
        JSON.parse(localStorage.getItem("displayTimeBy")) || "medium");
    const [hours, setHours] = useState(
        JSON.parse(localStorage.getItem("is24Hours")) || false);

    function handleCheckBoxClick(e){
        let value = e.target.checked;
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
            <div style={{display: displaySettings ? "block" : "none",zIndex:10}} className="settings">
                <h1 style={{fontSize:"3rem"}} className={"close"} onClick={() => setDisplaySettings(false)}>X</h1>
                <TimeDisplayFormat
                    handleClick = {handleCheckBoxClick}
                    hours={hours}
                />
                <DisplayTimeBy
                    displayTimeBy = {displayTimeBy}
                    handleClick = {handleRadioClick}
                />
            </div>
            <button className={"settings--button"} onClick={toggleSettings}><img src={settingsSvg} alt="settings"/></button>
        </div>
    )
}
import {useState, useEffect} from "react";
import Weather from "./Weather.jsx";
import BackgoundPhoto from "./BackgoundPhoto.jsx";
import AdviceAPI from "./AdviceAPI.jsx";
import MainSection from "./MainSection.jsx";
import settingsSvg from "./assets/settings.svg"
import "./index.css"
import TimeDisplayFormat from "./settingsOptions/TimeDisplayFormat.jsx";

export default function App() {

    const getIs24Hours = localStorage.getItem("is24Hours");
    const [displaySettings, setDisplaySettings] = useState(false);
    const [hours, setHours] = useState(JSON.parse(getIs24Hours) || false);

    function handleClick(e){
        const value = e.target.checked;
        setHours(value)
    }

    useEffect(() => {
        localStorage.setItem("is24Hours", hours);
    }, [hours])

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
                <MainSection is24Hours={hours}/>
            </main>
            <BackgoundPhoto />
            <div style={{display: displaySettings ? "block" : "none"}} className="settings">
                <TimeDisplayFormat
                    hours = {hours}
                    handleClick = {handleClick}
                />
            </div>
            <button onClick={toggleSettings}><img src={settingsSvg} alt="settings"/></button>
        </div>
    )
}
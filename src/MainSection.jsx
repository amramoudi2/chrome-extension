import {useEffect, useState} from "react";


export default function MainSection({is24Hours}){

    const [inputData, setInputData] = useState({
        "search" : ""
    })
    const [time,setTime] = useState(null)

    function getTime() {
        const date = new Date();
        const hour = date.getHours();

        let greeting = "";

        if (hour >= 6 && hour < 12) {
            greeting = "Good Morning";
        } else if (hour >= 12 && hour < 17) {
            greeting = "Good Afternoon";
        } else if (hour >= 17 && hour < 21) {
            greeting = "Good Evening";
        } else {
            greeting = "Good Night";
        }

        setTime({
            date: date,
            greeting: greeting
        });
    }


    useEffect(() => {

        getTime()

        if(time){

            const interval = setInterval(() => {
                getTime();
            },1000)

            return () => clearInterval(interval)
        }

    },[])



    function handleChange(event) {
        const search = event.target.value

        setInputData({search})
    }

    function handleSubmit(event){
        if(event.key === "Enter"){
            window.open(`https://www.google.com/search?q=${inputData.search}`,"_self");
        }
    }

    return (
        <div className={"main--section"}>

            <h2 className={"text"}>
                {time?.greeting}
            </h2>

            <h1 className={"text"}>
                {time?.date.toLocaleString("en-US", {hour12: !is24Hours, timeStyle: "medium"})}
            </h1>


            <input
                className={"input--main"}
                type="text"
                placeholder="what's on your mind?"
                onChange={handleChange}
                value={inputData.search}
                onKeyDown={handleSubmit}
            />

        </div>
    )
}
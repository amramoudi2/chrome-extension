import {useEffect, useState} from "react";


export default function MainSection(){

    const [inputData, setInputData] = useState({
        "search" : ""
    })
    const [time,setTime] = useState(new Date)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date)
        },1000)

        return () => clearInterval(interval)
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

            <h1 className={"text"}>
                {time.toLocaleString("en-US", {hour12: true, timeStyle: "medium"})}
            </h1>

            <input
                type="text"
                placeholder="what's on your mind?"
                onChange={handleChange}
                value={inputData.search}
                onKeyDown={handleSubmit}
            />

        </div>
    )
}
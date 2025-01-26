import {useEffect, useState} from "react";
import {fetchData} from "./reusable-functions/reusable-functions.jsx";
import "./index.css"


export default function AdviceAPI() {

    const [data,setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!data){
            const apiUrl = "https://api.adviceslip.com/advice"

            fetchData(apiUrl,setData,setError);
        }
    },[])

    if(error){
        return (
            <div className={"advice text"}>
                <p>god didn't give you the dream for no reason</p>
            </div>
        )
    }

    return (
        <div className={"advice text"}>
            <p>{data?.slip.advice}</p>
        </div>
    )
}
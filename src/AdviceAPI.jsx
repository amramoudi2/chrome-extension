import {useEffect, useState} from "react";


export default function AdviceAPI() {

    // https://api.adviceslip.com/advice

    const [data,setData] = useState({slip:{}})

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => setData({slip:{id:223,advice:"Vinegar is a powerful cleaning agent."}}))
    },[])

    return (
        <div className={"advice text"}>
            <p>{data.slip.advice}</p>
        </div>
    )
}
import {useEffect,useState} from "react";


export default function Weather(){

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const [location ,setLocation ] = useState({lon:0,lat:0});
    const [data, setData] = useState({});


    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setLocation({lon,lat});
    })

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?q=${location.lat},${location.lon}&key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => setData("can't find location"));
    },[location])

    if(!data.current){
        return <h1>loading...</h1>
    }else{
        return (
            <div className="weather">
                <div className={"weather--current"}>
                    <img src={data.current.condition.icon} alt={data.current.condition.text}/>
                    <h1 className="weather--text">{data.current.temp_c}°</h1>
                </div>
                <h3 className="weather--text weather--text--h3">low: {data.current.dewpoint_c}</h3>
                <h3 className="weather--text weather--text--h3">high: {data.current.heatindex_c}</h3>
            </div>
        )
    }
}





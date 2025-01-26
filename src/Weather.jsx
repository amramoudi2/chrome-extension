import {useEffect,useState} from "react";
import {fetchData} from "./reusable-functions/reusable-functions.jsx";


export default function Weather(){

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const [location ,setLocation ] = useState(null);
    const [data, setData] = useState(null);
    const [error,setError] = useState(null);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (err) => setError(`Unable to retrieve location: ${err}`),
        );
    }, [])

    useEffect(() => {
        if (location) {
            const apiUrl = `http://api.weatherapi.com/v1/current.json?q=${location.lat},${location.lon}`

            fetchData(apiUrl,setData,setError,apiKey)
        }
    },[location])


    if (error){
        return <h1>{error}</h1>
    }

    if(!data){
        return <h1>loading...</h1>
    }

    return (
        <div className="weather">
            <div className={"weather--current"}>
                <img src={data.current.condition.icon} alt={data.current.condition.text}/>
                <h1 className="text">{data.current.temp_c}°</h1>
            </div>
            <h3 className="text weather--text--h3">low: {data.current.dewpoint_c}</h3>
            <h3 className="text weather--text--h3">high: {data.current.heatindex_c}</h3>
        </div>
    )
}





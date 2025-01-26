import {useEffect, useState} from "react";
import backUpImage from "./assets/back-up-photo.jpg";
import "./index.css"

export default function BackgoundPhoto(){

    const [data, setData] = useState({
        downloadLink: "#",
        photoURL: "",
        firstName: "#",
        lastName: "#",
        profileLink:"#",
    })

    const accessKey = import.meta.env.VITE_ACCESS_KEY

    function setBackgroundImage(url){
        document.getElementById("root").style.backgroundImage = `url(${url})`
    }

    // https://api.unsplash.com/photos/random?orientation=landscape&query=calm&client_id=${accessKey}


    useEffect(() => {
        fetch(``)
            .then((res) => res.json())
            .then(data => {
                setData({
                    downloadLink: data.links.html,
                    photoURL: data.urls.raw,
                    firstName: data.user.first_name,
                    lastName: data.user.last_name || "",
                    profileLink: data.user.links.html,
                })

                setBackgroundImage(data.urls.raw)
                console.log(data)
            })
            .catch(err => {
                setData({...data, photoURL: backUpImage})
                setBackgroundImage(backUpImage)
            })
    },[])


    return (
        <div className={"background--credits"}>
            {data.firstName &&
                <h3 className={"text"}>
                    <a href={data.profileLink} target={"_blank"}>
                        @{data.firstName} {data.lastName}
                    </a>
                </h3>}
            <h3 className={"text"}><a href={data.downloadLink} target={"_blank"}>Download Photo</a></h3>
        </div>
    )
}
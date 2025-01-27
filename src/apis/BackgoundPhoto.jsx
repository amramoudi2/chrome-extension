import {useEffect, useState} from "react";
import backUpImage from "../assets/back-up.jpg";
import "../index.css"

export default function BackgoundPhoto(){

    const [data, setData] = useState({
        downloadLink: "",
        photoURL: "",
        firstName: "",
        lastName: "",
        profileLink:"",
    })

    const accessKey = import.meta.env.VITE_ACCESS_KEY

    function setBackgroundImage(url){
        document.getElementById("root").style.backgroundImage = `url(${url})`
    }


    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=calm,dark&client_id=${accessKey}`)
            .then((res) => res.json())
            .then(data => {
                setData({
                    downloadLink: data.links.html,
                    photoURL: data.urls.full,
                    firstName: data.user.first_name,
                    lastName: data.user.last_name || "",
                    profileLink: data.user.links.html,
                })

                console.log(data)
                setBackgroundImage(data.urls.full)
            })
            .catch(err => {
                setData({...data, photoURL: backUpImage})
                console.log(err)
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
            {
                data.downloadLink && <h3 className={"text"}><a href={data.downloadLink} target={"_blank"}>Download Photo From Unsplash</a></h3>
            }

            {
                !data.downloadLink && <h3 className={"text"}>can't connect to the servers</h3>
            }
        </div>
    )
}
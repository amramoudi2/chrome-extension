import {useState} from "react";
import dots from "../assets/dots.svg"
import EditShortCut from "./EditShortCut.jsx";
import "../index.css"

export default function ShortCut({url,name,id,deleteFunction,updateFunction}){
    const [shortCutData,setShortCutData]= useState({url,name,id})
    const [displayEdit,setDisplayEdit]= useState(false)

    function toggleEdit(){
        setDisplayEdit(!displayEdit)
    }

    return (
        <div>
            <div className={"short--cut"}>
                <img onClick={toggleEdit} className={"edit--button"} src={dots} alt="edit"/>
                <a style={{textDecoration:"none"}} href={shortCutData.url} target="_self">
                    <div className={"add short--cut--box"}>
                        <img src={`https://www.google.com/s2/favicons?sz=64&domain=${shortCutData.url}`}/>
                        <p>{shortCutData.name}</p>
                    </div>
                </a>
            </div>
            <div style={{display: displayEdit ? "block" : "none",zIndex:"5"}} id={"add--menu"} className={"settings"}>
                <h2 className={"close add--close"} onClick={() => setDisplayEdit(false)}>X</h2>
                <EditShortCut changeShortCutDisplay={setShortCutData} deleteFunction={deleteFunction} disableWindowState={setDisplayEdit} updateFunction={updateFunction} name={name} id={id} url={url}/>
            </div>
        </div>
    )
}
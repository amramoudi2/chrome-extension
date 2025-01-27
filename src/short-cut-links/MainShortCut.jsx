import {useEffect, useState} from "react";
import "../index.css"
import plus from "../assets/plus.svg";
import AddShortCut from "./AddShortCut.jsx";
import ShortCut from "./ShortCut.jsx";

export default function MainShortCut(){
    const [displayAdd, setDisplayAdd] = useState(false);
    const [shortCutLinks, setShortCutLinks] = useState(JSON.parse(
        localStorage.getItem("links")
    ) || []);

    function toggleAdd(){
        setDisplayAdd(!displayAdd);
    }

    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(shortCutLinks));
    },[shortCutLinks])

    function update(shortCut){
        setShortCutLinks(prevLinks => (
            prevLinks.map(link => {
                if(link.id === shortCut.id){
                    return shortCut;
                }else{
                    return link;
                }
            })
        ));
    }

    function deleteShortCut(shortCut){
        setShortCutLinks(prevLinks => {
            return prevLinks.filter(link => {
                if(shortCut.id !== link.id){
                    return link;
                }
            })
        })
    }

    const displayShortCutsMap = shortCutLinks.map((item)=>{
        return (
            <ShortCut deleteFunction={deleteShortCut} updateFunction={update} key={item.id} url={item.url} name={item.name} id={item.id}/>
        )
    })


    return (
        <div className={"add--main"}>
            <button style={{display: shortCutLinks.length === 10 ? "none" : "block"}} onClick={toggleAdd} className={"add"}>
                <img src={plus} alt="add"/>
                <p>Add Link</p>
            </button>
            <div style={{display: displayAdd ? "block" : "none",zIndex:"5"}} id={"add--menu"} className={"settings"}>
                <h2 className={"close add--close"} onClick={() => setDisplayAdd(false)}>X</h2>
                <AddShortCut closeAdd={setDisplayAdd} setState={setShortCutLinks}/>
            </div>
            {displayShortCutsMap}
        </div>
    )
}
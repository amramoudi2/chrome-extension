import {useState} from "react";
import "../index.css"

export default function EditShortCut({url,name,deleteFunction,updateFunction,id,disableWindowState,changeShortCutDisplay}){

    const [savedData, setSavedData] = useState({
        name:name,
        url:url,
        id:id
    })

    function handleInputChange(e){
        const {value,name} = e.target;
        setSavedData(prevHandles => {
            return ({
                ...prevHandles,
                [name]:value,
            })
        })
    }

    function handleSave(){
        updateFunction(savedData)
        changeShortCutDisplay(savedData)
        disableWindowState(false);
    }

    function handleDelete(){
        deleteFunction(savedData)
        disableWindowState(false);
    }

    return(
        <form className={"add--form"} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor={"name"}>Name</label>
            <input
                value={savedData.name}
                onChange={handleInputChange}
                name={"name"}
                placeholder={"Name"}
                id={"name"}
                type="text"
                autoComplete={"off"}
            />
            <label htmlFor="url">url</label>
            <input
                value={savedData.url}
                onChange={handleInputChange}
                name={"url"}
                placeholder={"url"}
                id={"url"}
                type="text"
                autoComplete={"off"}
            />
            <div>
                <button
                    className={"edit--buttons"}
                    onClick={handleSave}
                    disabled={!savedData.name || !savedData.url}
                >Save</button>
                <button
                    className={"edit--buttons"}
                    onClick={handleDelete}
                >
                    delete
                </button>
            </div>
        </form>
    )
}
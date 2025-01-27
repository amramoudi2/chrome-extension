import {useState} from "react";
import {nanoid} from "nanoid";
import "../index.css"

export default function AddShortCut({setState,closeAdd}){

    const [handleInputs, setHandleInputs] = useState({
        name:"",
        url:""
    })

    function handleInputChange(e){
        const {value,name} = e.target;
        setHandleInputs(prevHandles => {
            return ({
                ...prevHandles,
                [name]:value,
                id:nanoid()
            })
        })
    }

    function handleSave(){
        setState(prevState => ([...prevState, handleInputs]))
        setHandleInputs({name:"",url:""})
        closeAdd(false)
    }

    return(
        <form className={"add--form"} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor={"name"}>Name</label>
            <input
                value={handleInputs.name}
                onChange={handleInputChange}
                name={"name"}
                placeholder={"Name"}
                id={"name"}
                type="text"
                autoComplete={"off"}
            />
            <label htmlFor="url">url</label>
            <input
                value={handleInputs.url}
                onChange={handleInputChange}
                name={"url"}
                placeholder={"url"}
                id={"url"}
                type="text"
                autoComplete={"off"}
            />
            <button
                onClick={handleSave}
                disabled={!handleInputs.name || !handleInputs.url}
            >Save</button>
        </form>
    )
}
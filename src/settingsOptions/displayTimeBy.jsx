import "../index.css"

export default function DisplayTimeBy({handleClick,displayTimeBy}){


    return (
        <div className="display--time--by">
            <div className="align--radio">
                <label className={"text radio--labels"} htmlFor={"medium"}>display full time</label>
                <input
                    value={"medium"}
                    name={"display--time"}
                    id={"medium"}
                    type={"radio"}
                    defaultChecked={displayTimeBy === "medium"}
                    onClick={handleClick}
                    className={"radio--buttons"}
                />
            </div>
            <div className="align--radio">
                <label className={"text radio--labels"} htmlFor={"min--hours"}>display minutes and hours only</label>
                <input
                    value={"short"}
                    name={"display--time"}
                    id={"min--hours"}
                    type={"radio"}
                    defaultChecked={displayTimeBy === "short"}
                    onClick={handleClick}
                    className={"radio--buttons"}
                />
            </div>
        </div>
    )
}
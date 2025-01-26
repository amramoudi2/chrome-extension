import "../index.css"

export default function DisplayTimeBy({handleClick,displayTimeBy,hours}){


    return (
        <div className="display--time--by">
            <div className="align--radio">
                <label className={"text"} htmlFor={"medium"}>display full time eg: 6:30:24pm</label>
                <input
                    value={"medium"}
                    name={"display--time"}
                    id={"medium"}
                    type={"radio"}
                    defaultChecked={displayTimeBy === "medium"}
                    onClick={handleClick}
                />
            </div>
            <div className="align--radio">
                <label className={"text"} htmlFor={"min--hours"}>display minutes and hours only</label>
                <input
                    value={"short"}
                    name={"display--time"}
                    id={"min--hours"}
                    type={"radio"}
                    defaultChecked={displayTimeBy === "short"}
                    onClick={handleClick}
                />
            </div>
            <div className="align--radio">
                <label className={"text"} htmlFor={"hours"}>display hours only</label>
                <input
                    value={"small"}
                    name={"display--time"}
                    id={"hours"}
                    type={"radio"}
                    defaultChecked={displayTimeBy === "small"}
                    onClick={handleClick}
                    disabled={hours}
                />
            </div>
        </div>
    )
}
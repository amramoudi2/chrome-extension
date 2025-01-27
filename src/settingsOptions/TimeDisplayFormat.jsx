import "../index.css"


export default function TimeDisplayFormat({handleClick,hours}){


    return (
        <div className="time--display--format">
            <label className={"text container"} htmlFor={"12--check--box"}>24 Hours</label>
            <input
                onChange={handleClick}
                className={"check--box--settings"}
                checked={hours}
                id={"12--check--box"}
                type={"checkbox"}
            />
        </div>
    )

}
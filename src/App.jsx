import Weather from "./Weather.jsx";
import BackgoundPhoto from "./BackgoundPhoto.jsx";

export default function App() {
    
    return (
        <div className={"background--holder"}>
            <BackgoundPhoto />
            <Weather />
        </div>
    )
}
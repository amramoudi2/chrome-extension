import Weather from "./Weather.jsx";
import BackgoundPhoto from "./BackgoundPhoto.jsx";
import AdviceAPI from "./AdviceAPI.jsx";
import "./index.css"
import MainSection from "./MainSection.jsx";

export default function App() {

    return (
        <div className={"background--holder"}>
            <header>
                <Weather/>
                <AdviceAPI/>
            </header>
            <main>
                <MainSection />
            </main>
            <BackgoundPhoto />
        </div>
    )
}
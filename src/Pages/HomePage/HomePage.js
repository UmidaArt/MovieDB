import "./HomePage.css"
import Popular from "../../Components/Popular";
import Trend from "../../Components/Trend";

const HomePage = () => {

    return (
        <>
            <div className="mainBlock">
                <div className="welcome">
                    <div className="container">
                        <div className="welcomeBox">
                            <div className="welcomeText">
                                <h1 className="welcomeMainTitle">Добро пожаловать.</h1>
                                <p className="welcomeTitle">Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p>
                                <form>
                                    <input type="text" placeholder="Найти фильм, сериал, персону....."/>
                                    <button>Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popular/>
            <Trend/>
        </>
    );
};

export default HomePage;
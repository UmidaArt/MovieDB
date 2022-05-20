import "./HomePage.css"
import Popular from "../../Components/Popular";
import Trend from "../../Components/Trend";
import {useState} from "react";

const HomePage = () => {

    return (
        <>
            <div className="mainBlock">
                <div className="welcome">
                    <div className="container">
                        <div className="welcomeBox">
                            <div className="welcomeText">
                                <h1 className="welcomeMainTitle">Добро пожаловать.</h1>
                                <h3 className="welcomeTitle">Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                                <form>
                                    <input type="text" className="mainInput" placeholder="Найти фильм, сериал, персону....."/>
                                    <button type="submit" className="mainBtn">Search</button>
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
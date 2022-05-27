import "./HomePage.css"
import Popular from "../../Components/Popular";
import Trend from "../../Components/Trend";
import {useEffect, useState} from "react";
// import mainImg from "../../assets/images/mainImg.jpeg"
import axios from "axios";

const HomePage = () => {

    // const [movie, setMovie] = useState([])
    //
    // // const getImg = () => {
    // //     let img = []
    // //     for (let i = 0; i <= 20; i++) {
    // //         return
    // //
    // //     }
    // // }

    // useEffect(() => {
    //     axios(`https://api.themoviedb.org/3/movie/?language=ru&api_key=7b0978a92c067b08001617c99e5b9879`)
    //         .then((res) => {
    //             setMovie(res.data)
    //             let img = []
    //             for (let i = 0; i <= 20; i++) {
    //                 return
    //
    //             }
    //             // setMovieLoader(false)
    //         })
    // },[])

    return (
        <>
            <div className="mainBlock">
                <div className="welcome">
                    <div style={{backgroundColor: 'rgba(3, 37, 65, 0.5)'}}>
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
            </div>
            <Popular/>
            <Trend/>
        </>
    );
};

export default HomePage;
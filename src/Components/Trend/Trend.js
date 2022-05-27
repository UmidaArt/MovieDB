import React, {useEffect, useState} from 'react';
import "./Trend.css"
import axios from "axios";
import {Link} from "react-router-dom";

const Trend = () => {

    const [trendMovies, setTrendMovies] = useState([])

    useEffect(() => {
        axios('https://api.themoviedb.org/3/trending/all/day?api_key=7b0978a92c067b08001617c99e5b9879')
            .then((res) => setTrendMovies(res.data.results))
    },[])

    return (
        <div className="trend">
            <div className="trendBlock">
                <div className="container">
                    <h2>В тренде</h2>
                    <div className="scroller">
                        {
                            trendMovies.map((item) => (
                                <div className="movie-card" key={item.id}>
                                    <div className="card-img">
                                        <Link to={`/movie/${item.id}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="img" width="150px"/>
                                        </Link>
                                        <div className="consensus">
                                            23 <span>%</span>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <Link to={`/movie/${item.id}`}>
                                            <h5 className="card-title">{item.original_title}</h5>
                                        </Link>
                                        {/*<span className="card-year">{formatDate(item.release_date)}</span>*/}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trend;
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
        <div className="container">
            <div className="trend">
                <h1>В тренде</h1>
                <div className="row">
                    {
                        trendMovies.map((movie) => (
                            <div className="col-2" key={movie.id}>
                                <Link to={`/movie/${movie.id}`}>
                                    <div className="colItem">
                                        <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
                                             width="150px"/>
                                        <h4>{movie.original_title}</h4>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trend;
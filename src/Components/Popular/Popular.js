import React, {useEffect, useState} from 'react';
import "./Popular.css"
import axios from "axios";
import {Link} from "react-router-dom";

const Popular = () => {

    const [popMovies, setPopMovies] = useState([])

    useEffect(() => {
        axios('https://api.themoviedb.org/3/movie/popular?api_key=7b0978a92c067b08001617c99e5b9879&language=en-US&page=1')
            .then((res) => setPopMovies(res.data.results))
    },[])

    const formatDate = (date) => {
        const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
        const reversedDate = date.split('-').reverse()
        reversedDate[1] = month[reversedDate[1] - 1]
        return reversedDate.join(' ')
    }

    return (
        <div className="popular">
            <div className="popularBlock">
                <div className="container">
                    <h2>Что популярно</h2>
                    <div className="scroller">
                        {
                            popMovies.map((item) => (
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
                                        <span className="card-year">{formatDate(item.release_date)}</span>
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

export default Popular;
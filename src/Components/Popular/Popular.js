import React, {useEffect, useState} from 'react';
import "./Popular.css"
import axios from "axios";
import {Link} from "react-router-dom";
import {IMAGES_BASE_URL, SERVER_API} from "../../Constants/Constants";

const Popular = () => {

    const [popMovies, setPopMovies] = useState([])
    // const [tv, setTv] = useState('tv')

    useEffect(() => {
        axios(`${SERVER_API}/movie/popular?api_key=7b0978a92c067b08001617c99e5b9879&language=en-US&page=1`)
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
                    <div className="selector">
                        <h2>Что популярно</h2>
                        <div>
                            <button className="selectorBtm">По ТВ</button>
                            <button className="selectorBtm">В кинотеатрах</button>
                        </div>
                    </div>
                    <div className="scroller">
                        {
                            popMovies.map((item) => (
                                <div className="movie-card" key={item.id}>
                                    <div className="card-img">
                                        <Link to={`/movie/${item.id}`}>
                                            <img src={`${IMAGES_BASE_URL}/w440_and_h660_face${item.poster_path}`} alt="img" width="150px"/>
                                        </Link>
                                        <div className="consensus">{item.vote_average * 10}<span>%</span></div>
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
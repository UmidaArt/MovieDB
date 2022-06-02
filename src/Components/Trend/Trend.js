import React, {useEffect, useState} from 'react';
import "./Trend.css"
import axios from "axios";
import {Link} from "react-router-dom";
import {IMAGES_BASE_URL, SERVER_API} from "../../Constants/Constants";

const Trend = () => {

    const [trendMovies, setTrendMovies] = useState([])
    const [time, setTime] = useState('day')

    useEffect(() => {
        axios(`${SERVER_API}/trending/movie/${time}?api_key=7b0978a92c067b08001617c99e5b9879`)
            .then((res) => setTrendMovies(res.data.results))
    },[time])

    // const formatDate = (date) => {
    //     const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    //     const reversedDate = date.split('-').reverse()
    //     reversedDate[1] = month[reversedDate[1] - 1]
    //     return reversedDate.join(' ')
    // }

    return (
        <div className="trend">
            <div className="trendBlock">
                <div className="container">
                    <div className="selector">
                        <h2>В тренде</h2>
                        <div>
                            <button className="selectorBtm" onClick={() => setTime('day')}>Сегодня</button>
                            <button className="selectorBtm" onClick={()=> setTime('week')}>На этой неделе</button>
                        </div>
                    </div>
                    <div className="scroller">
                        {
                            trendMovies.map((item) => (
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
                                        {/*<span className="card-year">{formatDate(item.first_air_date)}</span>*/}
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
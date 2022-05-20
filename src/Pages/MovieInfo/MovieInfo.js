import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "./MovieInfo.css"
import getAverageColor from "get-average-color";

const MovieInfo = () => {

    const {id} = useParams()
    const [movie, setMovie] = useState([])
    const [credits, setCredits] = useState([])
    const [people, setPeople] = useState([])
    const [movieLoader, setMovieLoader] = useState(true)
    const [creditsLoader, setCreditsLoader] = useState(true)

    const getPeople = (people) => {
        let result = []
        for (let i = 0; i < 39; i++) {
            if (people[i].known_for_department === 'Writing') {
                result = [...result,people[i].name]
            }
        }
        const arr = result.filter((item, index) => {
            return result.indexOf(item) === index
        })
        setPeople(arr)
    }

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?language=ru&api_key=7b0978a92c067b08001617c99e5b9879`)
            .then((res) => {
                setMovie(res.data)
                setMovieLoader(false)
            })
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then((res) => {
                setCredits(res.data.cast)
                setPeople(res.data)
                setCreditsLoader(false)
                getPeople(res.data.crew)
                // getAverageColor(test).then(rgb => console.log(rgb))
            })
    },[])

    if (movieLoader || creditsLoader) {
        return 'Loading.....'
    }

    return (
        <div className="infoBlock">
            <div className="container">
                <div className='movieInfoBlock'>
                    <div className="movieInfo">
                        <div className="filmInfoImg" key={id} >
                            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt="info"
                                 width="300px"/>
                        </div>
                        <div className="infoBox">
                            <h1 className="nameIngredient">{movie.title}</h1>
                            <p>{movie.release_date}</p>
                            <h4 className="filmTitle">{movie.genres[0].name}</h4>
                            <p>{movie.runtime} min</p>
                            <p>{movie.tagline}</p>
                            <h4>Обзор</h4>
                            <p>{movie.overview}</p>
                            <div className="row">
                                {
                                    people.map((person) => (
                                        <div className="col-3" key={person.id}>
                                            <div>
                                                <p>{person}<br/>Screenplay, Story</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="creditsBlock">
                    <h3>В главных ролях</h3>
                    <div className="scroller">
                        {
                            credits.map((credit) => (
                                <div className="movie-card" key={credit.id}>
                                    <div className="cardImg">
                                        <Link to={`/person/${credit.id}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${credit.profile_path}`}
                                                 alt="img" width="50px"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-content">
                                        <Link to={`/person/${credit.id}`}>
                                            <h5 className="card-title">{credit.name}</h5>
                                            <h5 className="card-character">{credit.character}</h5>
                                        </Link>
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

export default MovieInfo;
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const MovieInfo = () => {

    const {id} = useParams()
    const [movie, setMovie] = useState([])
    // const [credits, setCredits] = useState([])
    const [movieLoader, setMovieLoader] = useState(true)
    // const [creditsLoader, setCreditsLoader] = useState(true)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?language=ru&api_key=7b0978a92c067b08001617c99e5b9879`)
            .then((res) => {
                setMovie(res.data)
                setMovieLoader(false)
            })
        // axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7b0978a92c067b08001617c99e5b9879&language=ru&append_to_response=ru`)
        //     .then((res) => {
        //         setCredits(res.data)
        //         setCreditsLoader(false)
        //     })

    },[])

    if (movieLoader) {
        return 'Loading...'
    }

    return (
        <div>
            <div className="row">
                <div className="col-3" key={id} >
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`} alt="info"
                         width="100px"/>
                    <h4 className="nameIngredient">{movie.original_title}</h4>
                </div>
            </div>
            
        </div>
    );
};

export default MovieInfo;
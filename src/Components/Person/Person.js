import React, {useEffect, useState} from 'react';
import "./Person.css"
import axios from "axios";
import {useParams} from "react-router-dom";

const Person = () => {

    const {id} = useParams()
    const [person, setPerson] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}?api_key=7b0978a92c067b08001617c99e5b9879&language=ru`)
            .then((res) => {
                setPerson(res.data)

            })
    },[])

    return (
        <>
            <div className="topNav">
                <ul className="topNavList">
                    <li>Обзор</li>
                    <li>Медиа</li>
                    <li>Фандом</li>
                    <li>Поделиться</li>
                </ul>
            </div>
            <div className="personPage">
                <div className="container">
                    <div className="person">
                        <div className="personImg">
                            <img src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${person.profile_path}`}/>
                        </div>
                        <div className="personInfo">
                            <h1>{person.name}</h1>
                            <h4>Дата рождения : {person.birthday}</h4>
                            <h4>Место рождения : {person.place_of_birth}</h4>
                            <h4>Биография</h4>
                            <p>{person.biography}</p>
                            {/*<h3>Известность за</h3>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Person;
import React from 'react';
import logo from "../../assets/images/logo.svg"
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="headerItem">
            <div className="header">
                <Link to="/">
                    <img src={logo} width="154" alt="logo"/>
                </Link>
            </div>
            <div className="headerNav">
                <ul className="navList">
                    <li><Link to="/">Фильмы</Link></li>
                    <li><Link to="/serials">Сериалы</Link></li>
                    <li><Link to="people">Люди</Link></li>
                    <li><Link to="more">Еще</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Header;
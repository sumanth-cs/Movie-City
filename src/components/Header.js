import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

export default function Header() {
    return(
        <>
        <div className="header">
            <div className="header_left">
                <Link to="/"><img className="header_icon" src={logo} alt="" /></Link>
                <Link to="/movies/popular"><span>Popular</span></Link>
                <Link to="/movies/top_rated"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"><span>upcoming</span></Link>
            </div>
            <div className="header_right">

            </div>
        </div>
        </>
    )
};


import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => {
                            return (<Link to={`/movie/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                                <div className="poster_image">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="" />
                                </div>
                                <div className="poster_image_overlay">
                                    <div className="poster_image_title">
                                        {movie ? movie.original_title : ""}
                                    </div>
                                    <div className="poster_image_runtime">
                                        {movie ? movie.release_date : ""}{" "}
                                        <span className="poster_image_rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star"/>{" "}
                                        </span>
                                    </div>
                                    <div className="poster_image_description">
                                        {movie ?movie.overview:""}
                                    </div>
                                </div>
                            </Link>)
                        })
                    }
                </Carousel>
            </div>
        </>
    )
};

export default Home;

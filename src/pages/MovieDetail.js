import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./MovieDetail.css"


const MovieDetail = () => {

    const [movie, setMovie] = useState();
    const { id } = useParams()

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    useEffect(() => {
        getData()
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="movie">
                <div className="movie_intro">
                    <img className='movie_backdrop' src={`https://image.tmdb.org/t/p/original/${movie ? movie.backdrop_path : ""}`} alt="" />
                </div>
                <div className="movie_detail">
                    <div className="movie_detail_left">
                        <div className="movie_poster_box">
                            <img className="movie_poster" src={`https://image.tmdb.org/t/p/original/${movie ? movie.poster_path : ""}`} alt="" />
                        </div>
                    </div>
                    <div className="movie_detail_right">
                        <div className="movie_detail_right_top">
                            <div className="movie_name">{movie ? movie.original_title : ""}</div>
                            <div className="movie_tagline">{movie ? movie.tagline : ""}</div>
                            <div className="movie_rating">
                                {movie ? movie.vote_average : ""} <i class="fas fa-star" />
                                <span className="movie_vote_count">{movie ? "(" + movie.vote_count + ") votes" : ""}</span>
                            </div>
                            <div className="movie_runtime">{movie ? movie.runtime + " mins" : ""}</div>
                            <div className="movie_releaseDate">{movie ? "Release date: " + movie.release_date : ""}</div>
                            <div className="movie_genres">
                                {
                                    movie && movie.genres
                                        ?
                                        movie.genres.map(genre => (
                                            <><span className="movie_genre" id={genre.id}>{genre.name}</span></>
                                        ))
                                        :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="movie_detail_right_bottom">
                            <div className="synopsis_text">Synopsis</div>
                            <div>{movie ? movie.overview : ""}</div>
                        </div>
                    </div>
                </div>
                <div className="movie_links">
                    <div className="movie_heading">More Info : </div>
                    {
                        movie && movie.homepage && <Link to={movie.homepage} style={{ textDecoration: "none", color: "white" }} target="_blank"> <p><span className='movie_btn movie_homepage_btn'>Home Page<i className="newTab fas fa-external-link-alt"></i></span></p></Link>
                    }
                    {
                        movie && movie.imdb_id && <Link to={movie.imdb_id} style={{ textDecoration: "none", color: "white" }} target="_blank"> <p><span className='movie_btn movie_imdb_btn'> IMDb <i className="newTab fas fa-external-link-alt"></i></span></p></Link>
                    }
                </div>
            </div>
        </>
    )
}

export default MovieDetail
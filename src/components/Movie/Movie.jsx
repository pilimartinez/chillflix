import './Movie.css';
import React, { useState, useEffect} from 'react';

function Movie(props) {
return(
        <li className="movie-container" key={props.id}>
                <a href="#" onClick={props.click}>
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500/${props.poster}`}></img>
                </a>  
                <p className="title">{props.title}</p>
                <p className="year">{props.year}</p>
        </li>
)
}

export default Movie;
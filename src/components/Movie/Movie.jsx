import './Movie.css';
import React, { useState, useEffect} from 'react';

function Movie(props) {
const [posterImage, setPosterImage] = useState()

// const hasPoster = () => {
//         props.poster != "https://image.tmdb.org/t/p/w500/null" 
//         ? setPosterImage(`https://image.tmdb.org/t/p/w500/${props.poster}`) 
//         : setPosterImage("./defaultposter")
// }

return(
        <li className="movie-container" key={props.id}>
                <a href="#" onClick={props.click}>
                    <img className="poster" src={props.poster !== null
                                                ? `https://image.tmdb.org/t/p/w500/${props.poster}` 
                                                : require("./defaultposter.png")}></img></a>  
                <p className="title">{props.title}</p>
                <p className="year">{props.year}</p>
        </li>
)
}

export default Movie;
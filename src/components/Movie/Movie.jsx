import './Movie.css';
import Modal from '../Modal/Modal';
import React, { useState, useEffect} from 'react';

function Movie(props) {
const [visibility, setVisibility] = useState("invisible");

const toggleModal = () => {
setVisibility("visible")
}

return(
    <React.Fragment>
        <Modal display={visibility} id={props.id} title={props.title} poster={props.poster} year={props.year}/>
        <li className="movie-container" key={props.id}>
                <a href="#" onClick={toggleModal}>
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500/${props.poster}`}></img>
                </a>  
                <p className="title">{props.title}</p>
                <p className="year">{props.year}</p>
        </li>
    </React.Fragment>
)
}

export default Movie;
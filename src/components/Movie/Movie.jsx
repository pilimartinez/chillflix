import './Movie.css';
import defaultImage from './defaultposter.png';


function Movie(props) {

        return (
                <li className="movie-container" key={props.id}>
                        <button className="poster-container" onClick={props.click}>
                                <img alt="movie-poster" className="poster" src={props.poster !== null
                                        ? `https://image.tmdb.org/t/p/w500/${props.poster}`
                                        : defaultImage}></img></button>
                        <p className="title">{props.title.length > 40 ? `${props.title.substring(0, 40)}...` : props.title}</p>
                        <p className="year">{props.year}</p>
                </li>
        )
}

export default Movie;
import './Modal.css';
import defaultImage from './defaultposter.png';

function Modal({ display, movie, click }) {
  const modalClass = display ? "visible" : "invisible"

  return (
    <div className={modalClass} key={movie.id}>
      <div className="modal-content">
        <section className="header-modal">
          <img className="poster-modal" src={movie.poster_path !== undefined
                                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                        : defaultImage }></img>
          <a href="javascript:void(0)" onClick={click} className="modal-close">X</a>
        </section>
        <section className="body-modal">
          <p className="modal-title">{movie.title}</p>
          <div className="movie-description">
            <p className="overview">{movie.overview ? movie.overview : "No description provided"}</p>
            <div className="movie-stads">
              <p className="stads"><strong>Rate:</strong>  {movie.vote_average ? movie.vote_average : "No rate provided"}</p>
              <p className="stads"><strong>Release date:</strong>  {movie.release_date ? movie.release_date : "No date provided"}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Modal;
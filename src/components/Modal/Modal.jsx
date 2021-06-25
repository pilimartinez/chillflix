import './Modal.css';

function Modal({display, movie, click}) {
  const modalClass = display ? "visible" : "invisible"

  return (
    <div className={modalClass} key={movie.id}>
        <div class="modal-content">
          <section className="header-modal">
            <img className="poster-modal" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
              <a href="#" onClick={click} className="modal-close">X</a>
          </section>
          <section className="body-modal">
          <div className="movie-description">
            <p className="modal-title">{movie.title}</p>
            <p className="overview">{movie.overview}</p>
          </div> 
            <div className="movie-stads">
              <p className="stads"><strong>Rate:</strong>  {movie.vote_average}</p>
              <p className="stads"><strong>Release date:</strong>  {movie.release_date}</p>
            </div>
          </section>
        </div>
    </div>
  );
}

export default Modal;
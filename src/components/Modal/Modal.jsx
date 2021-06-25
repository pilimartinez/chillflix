import './Modal.css';

function Modal(props) {
  return (
    <div className={props.display} key={props.id}>
      <img className="poster" src={`https://image.tmdb.org/t/p/w500/${props.poster}`}></img>
      <p>{props.title}</p>
      <p className="year">{props.year}</p>
    </div>
  );
}

export default Modal;
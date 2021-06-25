import React, { useState, useEffect} from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';
import Modal from '../Modal/Modal';


function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});
  const [currentYear, setCurrentYear] = useState()
  const [apiKey] = useState("1b63eaf9251799c15f140837c94d7a45");
  const [yearsList, setYearsList] = useState([])
  const [isModalOpen, setModal] = useState(false);

  const getTopMovies = async () => {
    await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`)
    .then(response => response.json())
    .then(res => setMovieList(res.results))    
 }

 const getYearMovies = async () => {
  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${currentYear}&sort_by=vote_average.desc`)
  .then(response => response.json())
  .then(res => setMovieList(res.results))    
}

const toggleModal = () => {
  setModal(!isModalOpen)
}

const fillYearsList = () => {
  const innit = 1990;
  const current = new Date().getFullYear();
  const yearList = [];

  for (let i = innit; i < current; i++) {
    yearList.push(i + 1)
  }

  setYearsList(yearList.reverse())
}

const selectMovie = (movie) => {
setCurrentMovie(movie)
toggleModal()
}

const yearChange = (value) => {
  if (value == "Any") {
    setCurrentYear("Any")
    getTopMovies()
  } else {
    setCurrentYear(value)
    getYearMovies()
  }
  }

 useEffect(() => {
  fillYearsList()
  getTopMovies()
}, []);

  return (
    <div className="container">
      <section className="top-movies">
        <h3 className="category">TOP MOVIES</h3>
        <div className="filters">
          <p className="filter-title">Filter by:</p>
            <label>Year</label>
            <select value={currentYear} onChange={(event) => yearChange(event.target.value)}>
              <option value="Any">Any</option>
              {yearsList.map((year, index) =>
                <option key={index} value={year}>{year}</option>)}
            </select>
        </div>
        <ul className="movie-list"> {movieList.map(movie => 
          <Movie id={movie.id} title={movie.title} poster={movie.poster_path} year={movie.release_date} click={() => selectMovie(movie)}/>
          )} 
        </ul>      
      </section>
      <Modal display={isModalOpen} movie={currentMovie} click={toggleModal} />
    </div>
  );
}

export default MovieList;
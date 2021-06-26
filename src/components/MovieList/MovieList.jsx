import React, { useState, useEffect } from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';
import Modal from '../Modal/Modal';
import {getTopMovies, getYearMovies, customFetch} from '../../api';

const fillYearsList = () => {
  const innit = 1990;
  const current = new Date().getFullYear();
  const yearList = [];

  for (let i = innit; i < current; i++) {
    yearList.push(i + 1)
  }

  return yearList.reverse()
}

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});
  const [currentYear, setCurrentYear] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModal] = useState(false);
  const yearsList = fillYearsList();

  const toggleModal = () => {
    setModal(!isModalOpen)
  }
  const selectMovie = (movie) => {
    setCurrentMovie(movie)
    toggleModal()
  }

  const yearChange = (value) => {
    setCurrentYear(value)
    if (value == "Any") {
      getTopMovies().then((movies) => setMovieList(movies.results))
    } else {
      getYearMovies(currentYear).then((yearMovies) => setMovieList(yearMovies.results))
    }
  }

  const morePages = (isNext) => {
    const actualPage = isNext ? currentPage + 1 : currentPage - 1
    customFetch(actualPage, currentYear).then((moreMovies) => setMovieList(moreMovies.results))
    setCurrentPage(actualPage)
  }

  useEffect(() => {
    getTopMovies().then((movies) => setMovieList(movies.results))
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
          <Movie id={movie.id} title={movie.title} poster={movie.poster_path} year={movie.release_date} click={() => selectMovie(movie)} />
        )}
        </ul>
      </section>
      <Modal display={isModalOpen} movie={currentMovie} click={toggleModal} />
      { currentPage != 1 ? <button onClick={() => morePages(false)}>prev</button> : ""}
      <button onClick={() => morePages(true)}>nextpage</button>
    </div>
  );
}

export default MovieList;
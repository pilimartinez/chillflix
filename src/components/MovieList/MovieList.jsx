import './MovieList.css';
import Movie from '../Movie/Movie';
import React, { useState, useEffect} from 'react';

function MovieList() {
  const [topMovies, setTopMovies] = useState([]);
  const [yearMovies, setYearMovies] = useState([]);
  const [apiKey] = useState("1b63eaf9251799c15f140837c94d7a45");

  const getTopMovies = async () => {
    await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`)
    .then(response => response.json())
    .then(res => setTopMovies(res.results))    
 }

 const getYearMovies = async () => {
  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2010&sort_by=vote_average.desc`)
  .then(response => response.json())
  .then(res => setYearMovies(res.results))    
}

 useEffect(() => {
  getTopMovies()
  getYearMovies()
}, []);

  return (
    <div className="container">
      <section className="top-movies">
        <h3 className="category">TOP MOVIES</h3>
        <div className="filters">
          <p className="filter-title">Filter by:</p>
            <select>
              <option disabled selected>Year</option>
              <option value="2017">2017</option>
            </select>
        </div>
        <ul className="movie-list"> {topMovies.map(movie => 
          <Movie id={movie.id} title={movie.title} poster={movie.poster_path} year={movie.release_date}/>
          )} 
        </ul>      
      </section>
    </div>
  );
}

export default MovieList;
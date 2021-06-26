const API_KEY = "1b63eaf9251799c15f140837c94d7a45";

export const getTopMovies = () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`)
      .then(response => response.json())
  }

export  const getYearMovies = (currentYear) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${currentYear}&sort_by=vote_average.desc`)
      .then(response => response.json())
  }

export const customFetch = (currentPage, currentYear) => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&primary_release_year=${currentYear}&page=${currentPage}`)
      .then(response => response.json())
  }

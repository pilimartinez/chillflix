import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <MovieList/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;

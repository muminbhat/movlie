import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Cards';
import SearchIcons from './search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6838665e'

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovie(data.Search)
  }

  useEffect(() => {
    searchMovie('superman')
  }, []);
  return (
    <div className='app'>
      <h1>Movlie</h1>
      <div className='search'>
        <input type="text"
          placeholder='Search for your favorite movie'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        <img
          src={SearchIcons}
          alt="search"
          onClick={() => searchMovie(search)}
        />
      </div>

      {
        movie?.length > 0
          ? (<div className='container'>
            {movie.map((movie) => (
              <Cards movie={movie} />
            ))}
          </div>) :
          (
            <div className='empty'>
              <h2>No movie Found.</h2>
            </div>
          )

      }


    </div>

  );
}

export default App;

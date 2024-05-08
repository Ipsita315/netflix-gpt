import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  
  //Early return if movies are not there in redux store
  if (!movies.nowPlayingMovies || !movies.popularMovies || !movies.topRatedMovies || !movies.upcomingMovies ) return;
  return (
    <div className='secondary-container'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer;
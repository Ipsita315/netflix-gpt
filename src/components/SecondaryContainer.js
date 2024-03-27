import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store =>store.movies);
  //Early return if movies are not there in redux store
  if(!movies.nowPlayingMovies) return;
  return (
    <div className='secondary-container'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Trending" movies={movies.nowPlayingMovies}/>
      <MovieList title="Continue Watching" movies={movies.nowPlayingMovies}/>
      <MovieList title="Asian" movies={movies.nowPlayingMovies}/>
      <MovieList title="Mystery & Suspense" movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer;
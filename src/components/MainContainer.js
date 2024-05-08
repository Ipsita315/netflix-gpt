import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { UseSelector, useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  //Early return if movies are not present in the redux store.
  if (!movies) return;
  const movie = movies[0];

  const { title, overview, id } = movie;
  return (
    <div className='main-container'>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;
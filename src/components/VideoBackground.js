import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId, autoPlayFlag = true }) => { 
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
  const autoPlay = autoPlayFlag ? "?autoplay=1&mute=1" : "";
  useMovieTrailer(movieId);

  return (
    <>
      <iframe width="100%" className='aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + autoPlay}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </>
  )
}

export default VideoBackground;
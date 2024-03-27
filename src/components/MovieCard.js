import React from 'react'
import VideoBackground from './VideoBackground';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card w-20'>
            <div>{movie.title}</div>
            <VideoBackground video_id={movie.video_id} autoPlayFlag={false} />
        </div>
    )
}

export default MovieCard;
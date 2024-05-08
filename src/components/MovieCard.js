import React from 'react'
import VideoBackground from './VideoBackground';
import { TMDB_POSTER_PATH } from '../utils/constants';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <img className="movie-card__poster_img" src={TMDB_POSTER_PATH+movie.poster_path}/>
        </div>
    )
}

export default MovieCard;
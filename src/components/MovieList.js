import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className='movies-list'>
            <div className='movies-list__title'>{title}</div>
            <div className='movies-list__container'>{movies.map(movie => <MovieCard key={movie.id} movie={movie}/> )}</div>
        </div>
    )
}

export default MovieList;
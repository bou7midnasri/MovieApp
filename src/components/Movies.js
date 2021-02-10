import React from 'react'
import MovieCard from './MovieCard/MovieCard'
import './Movies.css'


function Movies({movies}) {
    return (
        <div className="movie" >
            {movies.map((movie, index)=><MovieCard movie={movie}/>)}
        </div>
    )
}

export default Movies

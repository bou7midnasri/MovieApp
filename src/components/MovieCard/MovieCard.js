import React from 'react';
import './Movie.css'

import StarRating from '../../StartRating.js';

const MovieCard = (props) => {
    return (
    <div className="container">
        <div className="movie-img">
            <img  src={props.movie.imageUrl} alt="" />
            <div className="text-movie-count">
            <div className='mr-grid'>
              <div className='col1'>
                <h4 >{props.movie.title}</h4>
                <h6 >{props.movie.subtitle}</h6>
                <div className='mr-grid summary-row'>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.description}</p>
                </div>
            </div>
       
                <div className='movie-rating'>
                        <StarRating rating={props.movie.rating} />
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.rating}</div>
                </div>
            </div>
        </div>
    </div>
)};

export default MovieCard
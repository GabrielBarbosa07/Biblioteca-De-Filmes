import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

export const MovieCard = (props) => {

    return (
        <div className='movie-card'
            key={props.movie_key}>
            <img src={props.apiImg + props.movie_poster_path} alt={props.movie_title} />
            <h2>{props.movie_title}</h2>
            <p>
                <FaStar />
                {props.movie_vote_average}
            </p>
            {<Link to={`/movie/${props.movie_id}`}>Detalhes</Link>}
        </div>
    )
}

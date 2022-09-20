import React, { useContext } from 'react'

import { Link, useParams } from 'react-router-dom'
import { SearchContext } from '../../Context/SearchContext';

import Navbar from "../common/Navbar"

export const Search = () => {
  const params = useParams()
  const { title } = params

  const { movies } = useContext(SearchContext);

  const imgPath = "https://image.tmdb.org/t/p/w500"

  return (
    <>
      <Navbar />
      <div className='container'>

        <h2 className='title'>Resultados para {title}:</h2>

        <div className="movies-container">

          {movies.map((movie) => (
            <div className="card" key={movie.id}>

              <div className='max-h'>
                <div className="image">
                  {!movie.poster_path ? "" : <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
                </div>
                <div className="text">
                  <h3>{movie.title}</h3>
                </div>
              </div>

              <Link to={`/movie/${movie.id}`}>
                Detalhes
              </Link>

            </div>
          ))}
        </div>

      </div>
    </>
  )
}
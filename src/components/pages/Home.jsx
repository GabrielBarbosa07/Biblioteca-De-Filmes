import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GeneralContext } from '../../Context/GeneralContext'
import Navbar from "../common/Navbar"

export const Home = () => {
  const { movies } = useContext(GeneralContext)

  const imgPath = "https://image.tmdb.org/t/p/w500"

  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className='title'>Filmes Populares</h1>
        <ul className='ul-style'>
          {movies.map((movie) => (
            <li className='li-style' key={movie.id}>
              {!movie.poster_path ? <h2>Imagem Indisponivel</h2> : <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
              <span>{movie.title}</span>
              <Link to={`/movie/${movie.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}
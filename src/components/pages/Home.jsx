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

        {movies.length === 0 ?
          <h1 className='title'>Nenhum Filme Popular Encontrado</h1>
          :
          <>
            <h1 className='title'>Filme Populares </h1>
            <ul className='ul-style'>
              {movies.map((movie) => (

                <li className='li-style' key={movie.id}>

                  {!movie.poster_path ?
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt={movie.title} /> :
                    <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
                  <span>{movie.title}</span>
                  <Link to={`/detalhes/${movie.id}`}>Detalhes</Link>
                </li>
              ))}
            </ul>
          </>
        }

      </div>
    </>
  )
}
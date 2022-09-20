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

      <div className='container'>
        <h2 className='title'>Melhores Filmes:</h2>

        <div className="movies-container">

          {movies.length === 0 && <h1>Nenhum filme encontrado!</h1>}

          {movies.map((movie) => (
            <div className="card" key={movie.id}>

              <div className='max-h'>
                <div className="image">
                  {!movie.poster_path ? <h2>Imagem Indisponivel</h2> : <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
                </div>
                <div className="text">
                  <h3>{movie.title}</h3>
                </div>
              </div>

              <Link to={`/movie/${movie.id}`}>Detalhes</Link>

            </div>
          ))}
        </div>
      </div>

    </>

  )
}
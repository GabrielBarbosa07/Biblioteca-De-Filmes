import React, { useState, useEffect } from 'react'

import { api_Key, api, apiImg } from '../../api/api'
import { MovieCard } from '../common/MovieCard'

import "../common/css/MoviesGrid.css"

export const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setTopMovies(data.results)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const topRatedURL = `${api}top_rated?${api_Key}`

    getTopRatedMovies(topRatedURL)
  }, [])


  return (
    <div className='container'>
      <h2 className='title'>Melhores Filmes:</h2>

      <div className="movies-container">

        {topMovies.length === 0 && <p>Carregando...</p>}

        {topMovies.map((movie) => (
        <MovieCard 
        movie_key={movie.id}
        apiImg={apiImg}
        movie_poster_path={movie.poster_path}
        movie_title={movie.title}
        movie_vote_average={movie.vote_average}
        />))}
      </div>

    </div>
  )
}
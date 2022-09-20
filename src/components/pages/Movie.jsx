import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Navbar from "../common/Navbar"

export default function Movie() {
    const [movie, setMovie] = useState([])
    const { id } = useParams()


    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`)
            .then(res => res.json())
            .then(data => {
                const { title, poster_path, overview, release_date } = data
                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${imgPath}${poster_path}`,
                    releaseDate: release_date
                }
                setMovie(movie)
            })
    }, [id])
    const imgPath = "https://image.tmdb.org/t/p/w500"

    return (
        <>
            <Navbar />
            <div className='details'>
                {movie.length === 0 && <h1>Carregando...</h1>}
                <div className="card-details" key={movie.id}>

                    <div className="image">
                    {!movie.poster_path ? <h2>Imagem Indisponivel</h2> : <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
                    </div>

                    <div className="text">
                        <div className="description">
                            <h2>{movie.title}</h2>
                            <p>{movie.sinopse}</p>
                        </div>
                        <p>{movie.releaseDate}</p>
                    </div>
                    <button><Link to="/">Home</Link></button>

                </div>
            </ div>
        </>
    )
}

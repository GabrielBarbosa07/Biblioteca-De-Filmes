import React, { useState, useEffect } from 'react'
import Loading from "../common/Loading/LoadingSpinner"
import { BiCameraMovie } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'

const { REACT_APP_API_KEY } = process.env

export default function Detalhes() {
    const [movie, setMovie] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_API_KEY}&language=pt-BR`

        fetch(url)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [id])

    const imgPath = "https://image.tmdb.org/t/p/w500"

    return (
        <main className="main-details">
            <nav id="navbar">
                <h2>
                    <Link to="/"><BiCameraMovie /> MoviesLib</Link>
                </h2>
            </nav>

            <div className='details'>
                {movie.length === 0 && <Loading />}

                <div className="card-details" key={movie.id}>

                    <div className="image">
                        {!movie.poster_path ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt={movie.title} /> : <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
                    </div>

                    <div className="text">
                        <div className="description">
                            <h2>{movie.title}</h2>
                            <p>{movie.overview === "" ? "Descrição Indisponível!" : movie.overview}</p>
                        </div>
                        <p className='release'>{movie.release_date}
                        </p>
                        <button><Link to="/">Voltar</Link></button>
                    </div>

                </div>
            </ div>
        </main>
    )
}

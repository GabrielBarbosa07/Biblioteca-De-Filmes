import React, { useState, useEffect } from 'react'
import Loading from "../components/common/Loading/LoadingSpinner"
import { Link, useParams } from 'react-router-dom'
import Header from '../components/common/Header'
import { Card } from 'react-bootstrap'

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
            <Header />

            {movie.length === 0 && <Loading />}

            <section id="CardContainer">
                <Card className="bg-black" >
                    {!movie.poster_path ?
                        <Card.Img className='max-w' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt={movie.title} /> :
                        <Card.Img className="max-w" variant="top" src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}

                    <Card.Body>
                        <Card.Text>
                            <h2 className='text-warning'>{movie.title}</h2>
                            <p className='text-secondary text-align-justify'>{movie.overview === "" ? "Descrição Indisponível!" : movie.overview}</p>
                            <p className='release text-light'>{movie.release_date}</p>
                            <Link to="/" className='bg-warning py-2 px-4 text-dark text-decoration-none fw-bold rounded-2'>Voltar</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
}

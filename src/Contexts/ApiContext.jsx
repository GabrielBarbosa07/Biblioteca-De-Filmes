import { createContext, useEffect, useState } from "react"

export const ApiContext = createContext()

export function ApiProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY
        fetch(`https://api.themoviedb.org/3/${search ? `search/movie` : `movie/popular`}?api_key=${apiKey}${search ? `&query=${search}&language=pt-BR` : `&language=pt-BR`}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => {
                console.error("Ocorreu um erro " + err)
            })
    }, [search]);

    return (
        <ApiContext.Provider value={{ movies, setSearch, search }}>
            {children}
        </ApiContext.Provider>
    )
}
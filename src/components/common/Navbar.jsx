import { useContext } from 'react'
import { BiCameraMovie } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { GeneralContext } from '../../Context/GeneralContext'
import "./css/NavBar.css"

const Navbar = () => {
    const { setSearch, search } = useContext(GeneralContext)
 
    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie /> MoviesLib</Link>
            </h2>
            <form>
                <input
                    type="search"
                    placeholder='Busque um Filme..'
                    id='search'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </form>
        </nav>
    )
}

export default Navbar
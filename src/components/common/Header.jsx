import { useContext } from 'react'
import { Button, Form, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BiCameraMovie } from "react-icons/bi"
import { ApiContext } from '../../Contexts/ApiContext'
import { AuthContext } from "../../Contexts/AuthContext"

const Header = () => {
    const { setSearch, search } = useContext(ApiContext)
    const { logout } = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect expand="2xl" bg="black" variant="dark">
            <Container >
                <Navbar.Brand href="/" className='fs-3 text-warning'><BiCameraMovie /> MoviesLib</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='d-flex '>
                        <div className='mb-2' />
                        <Button
                            onClick={logout}
                            variant="outline-danger"
                            className='fw-bold exit mb-2 align-self-end'
                        >
                            Sair
                        </Button>
                        <Form >
                            <Form.Control
                                type="search"
                                placeholder="Buscar Filme.."
                                className="me-2"
                                aria-label="Search"
                                value={search}
                                onChange={({ target }) => setSearch(target.value)}
                            />
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
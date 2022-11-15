import React, { useState, useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';

export const LoginPage = () => {
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("submit", { email, password });
        login(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <section className='center'>
            <Form onSubmit={handleSubmit} className="loginForm">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Digite seu Email"
                        required
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder='Digite sua Senha'
                        required
                        value={password}
                        onChange={({ target }) => setPassword(target.value)} />
                </Form.Group>

                <Button variant="warning" className="w-100 fw-bold" type="submit">
                    Entrar
                </Button>
            </Form>
        </section>
        // <form className="form" onSubmit={handleSubmit}>

        //     <div className="mb-3">
        //         <label for="email" className="form-label">Email</label>
        //         <input
        //             type="email"
        //             className="form-control"
        //             id="email"
        //             placeholder="Email.."
        //             value={email}
        //             onChange={({ target }) => setEmail(target.value)} />
        //     </div>
        //     <div className="mb-3">
        //         <label for="password" className="form-label">Senha</label>
        //         <input
        //             type="password"
        //             className="form-control"
        //             id="password"
        //             placeholder="Password.."
        //             value={password}
        //             onChange={({ target }) => setPassword(target.value)} />
        //     </div>

        //     <div className="actions">
        //         <button type="submit">Entrar</button>
        //         <Link className='sign' to="/register">Cadastrar-se</Link>
        //     </div>
        // </form>

    )
}
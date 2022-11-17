import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthContext';

export const LoginPage = () => {
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        login(email, password)
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

                <Button variant="warning" className="w-100 fw-bold mb-3" type="submit">
                    Entrar
                </Button>

                <Button href='/register' variant="dark" className='w-100 fw-bold'>Cadastrar-se</Button>
            </Form>
        </section>
    )
}
import { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Register() {
    const { register } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault()

        if (username === "" || email === "" || password === "") {
            return alert("Preencha todos os campos!");

        } else if (password !== confirmPassword) {
            return alert("Senhas Diferentes. Tente Novamente!")
        } else {
            register(username, email, password);
        }
    };

    return (
        <section className='center'>
            <Form onSubmit={handleRegister} className="loginForm">

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite seu Nome"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Digite seu Email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder='Digite sua Senha'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirme sua Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder='Confirme sua Senha'
                        value={confirmPassword}
                        onChange={({ target }) => setConfirmPassword(target.value)} />
                </Form.Group>

                <Button variant="warning" className="w-100 fw-bold mb-3" type="submit">
                    Registrar
                </Button>

                <Button href='/login' variant="dark" className='w-100 fw-bold'>Login</Button>
            </Form>
        </section>
    )
}

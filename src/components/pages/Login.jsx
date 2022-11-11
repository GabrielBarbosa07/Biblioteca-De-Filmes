import React, { useState, useContext } from 'react';
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
        <form className="form" onSubmit={handleSubmit}>

            <div class="mb-3">
                <label for="email" class="form-label">Example label</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Example input placeholder"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)} />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Another label</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Another input placeholder"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)} />
            </div>

            <div className="actions">
                <button type="submit">Entrar</button>
                <Link className='sign' to="/register">Cadastrar-se</Link>
            </div>
        </form>
    )
}
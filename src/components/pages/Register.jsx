import { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Register() {
    const { register } = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {

        if (email === "" || password === "" || password !== confirmPassword) {
            alert("Campos incorretos. Tente novamente!");

        } else {
            register(userName, email, password);
        }
    };

    return (
        <form>
            <input type="text"
                placeholder="Nome do pai"
                value={userName}
                required
                onChange={(e) => setUserName(e.target.value)} />
            <input type="text"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)} />
            <input type="password"
                placeholder="Senha"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)} />
            <input type="password"
                placeholder="Confirme sua senha!"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)} />

            <button
                onClick={handleRegister}
            >Registrar</button>
        </form>
    )
}

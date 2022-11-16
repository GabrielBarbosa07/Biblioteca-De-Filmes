import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const recoveredUser = localStorage.getItem("users")

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }
    }, [])

    const generateID = (users) => {
        if (users.length === 0) return 1

        const lastUser = users.at(-1)
        return lastUser.id + 1
    }

    const register = (username, email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) ?? []

        const user = users.find((user) => user.email === email)

        if (!user) {
            users.push({
                id: generateID(users),
                username,
                email,
                password
            })

            localStorage.setItem("users", JSON.stringify(users))
            navigate("/login")
            return
        }
        alert("Usuario já cadastrado!")
    }

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users"))

        const user = users.find((user) => user.email === email && user.password === password)

        if (!user) {
            alert("Email ou Senha incorreto!")
        } else {
            const loggedUser = {
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password,
            }

            setUser(loggedUser)
            navigate("/")
        }
    }

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
        navigate("/login")
    }


    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
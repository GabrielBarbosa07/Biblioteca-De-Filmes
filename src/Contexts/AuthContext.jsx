import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const recoveredUsers = JSON.parse(localStorage.getItem("users")) ?? []

        const lastUserCreated = recoveredUsers[recoveredUsers.length - 1]

        if (lastUserCreated) {
            // eslint-disable-next-line no-restricted-globals
            let rec = confirm(`Você deseja entrar na última conta logada?\n Usuário: ${lastUserCreated.username}`)

            if (rec) {
                login(lastUserCreated.email, lastUserCreated.password)
                setUser(lastUserCreated)

            } else {
                return
            }
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

        const userExist = users.find((user) => user.email === email && user.password === password)

        if (!userExist) {
            alert("Usuário não foi encontrado!")
        } else {
            const loggedUser = {
                id: userExist.id,
                username: userExist.username,
                email: userExist.email,
                password: userExist.password,
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
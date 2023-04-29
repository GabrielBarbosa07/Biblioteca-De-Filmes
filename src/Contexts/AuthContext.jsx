import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    // useEffect(() => {
    //     const users = getUsersOnLocalStorage()

    //     const lastUserCreated = users[users.length - 1]

    //     if (lastUserCreated) {
    //         // eslint-disable-next-line no-restricted-globals
    //         let lastLogin = confirm(`Você deseja acessar a última conta logada?\nDe Email: ${lastUserCreated.email}`)

    //         if (lastLogin) {
    //             login(lastUserCreated.email, lastUserCreated.password)
    //             setUser(lastUserCreated)

    //         } else {
    //             return
    //         }
    //     }
    //     eslint-disable-next-line
    // }, [])

    const getUsersOnLocalStorage = () => {
        const users = JSON.parse(localStorage.getItem("users")) ?? []
        return users
    }

    const generateID = (users) => {
        if (users.length === 0) return 1

        const lastUser = users.at(-1)
        return lastUser.id + 1
    }

    const register = (username, email, password) => {
        const users = getUsersOnLocalStorage()

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
        alert("Email já cadastrado!")
    }

    const login = (email, password) => {
        const users = getUsersOnLocalStorage()

        const userExist = users.find((user) => user.email === email && user.password === password)

        if (!userExist) {
            alert("Usuário não cadastrado!")

            // eslint-disable-next-line no-restricted-globals
            let registerAccount = confirm("Deseja criar sua conta?")

            if(registerAccount) navigate("/register")
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
import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext, AuthProvider } from './Contexts/AuthContext'
import { Home } from './pages/Home'
import Detalhes from './pages/Detalhes'
import Register from './pages/Register'
import { ApiProvider } from './Contexts/ApiContext'
import { LoginPage } from './pages/LoginPage'
import { ParticlesBackground } from './components/common/particlesBackground/ParticlesBackground'


export const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

        if (!authenticated) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    return (
        <BrowserRouter>
            {/* <ParticlesBackground /> */}

            <ApiProvider>
                <AuthProvider>
                    <Routes>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/' element={<Private> <Home /></Private>} />
                        <Route path='/detalhes/:id' element={<Private><Detalhes /></Private>} />
                    </Routes>
                </AuthProvider>
            </ApiProvider>

        </BrowserRouter>
    )
}

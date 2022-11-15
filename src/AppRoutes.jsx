import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import Detalhes from './components/pages/Detalhes'
import { ApiProvider } from './Contexts/ApiContext'
import { ParticlesBackground } from './components/common/particlesBackground/ParticlesBackground'
import { LoginPage } from './components/pages/LoginPage'
import { AuthContext, AuthProvider } from './Contexts/AuthContext'
import Register from './components/pages/Register'


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

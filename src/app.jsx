import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import Detalhes from './components/pages/Detalhes'
import { ApiContext } from './Contexts/ApiContext'
import { ParticlesBackground } from './components/common/particlesBackground/ParticlesBackground'
import { LoginPage } from './components/pages/Login'


export const App = () => {
    return (
        <BrowserRouter>
            <ParticlesBackground />

            <ApiContext>
                <Routes>
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/detalhes/:id' element={<Detalhes />} />
                </Routes>
            </ApiContext>

        </BrowserRouter>
    )
}

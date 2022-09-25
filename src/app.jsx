import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import Detalhes from './components/pages/Detalhes'
import { GeralContext } from './Context/GeneralContext'
import { ParticlesBackground } from './components/common/particlesBackground/ParticlesBackground'

export const App = () => {
    return (
        <BrowserRouter>
            <ParticlesBackground />
            <GeralContext>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/detalhes/:id' element={<Detalhes />} />
                </Routes>
            </GeralContext>
        </BrowserRouter>
    )
}

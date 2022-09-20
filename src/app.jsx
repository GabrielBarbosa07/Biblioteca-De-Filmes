import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import Movie from './components/pages/Movie'
import { GeralContext } from './Context/GeneralContext'
// import { ParticlesBackground } from './components/common/particlesBackground/ParticlesBackground'

export const App = () => {
    //const { errorMessage } = useContext(ErrorContext);
    return (
        <BrowserRouter>
            {/* <ParticlesBackground /> */}
                <GeralContext>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/movie/:id' element={<Movie />} />
                        </Routes>
                </GeralContext>
        </BrowserRouter>
    )
}

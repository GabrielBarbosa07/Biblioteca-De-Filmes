import React from 'react'
import { Navbar } from './components/common/Navbar'
import { Home } from './components/pages/Home'

export const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Home />
        </div>
    )
}

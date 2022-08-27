import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './app';
import { Home } from './components/pages/Home';
import { Movie } from './components/pages/Movie';
import { Search } from './components/pages/Search';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/movie/:id' element={<Movie />} />
          <Route exact path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Movie } from './components/pages/Movie';
import { Search } from './components/pages/Search';
import { App } from './app';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/movie/:id' element={<Movie />} />
          <Route exact path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;

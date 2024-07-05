import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Country from './pages/Country.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/search');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/search" element={ <Search/> }/>
        <Route
          path="/country/:code"
          element={ <Country/> }
        />
        <Route path="*" element={ <NotFound/> }/>
      </Routes>
      <div>
        <Link to={ '/' }>Home</Link>
        <Link to={ '/search' }>Search</Link>
        <Link to={ '/country' }>Country</Link>
        <button onClick={ onClickButton }></button>
      </div>
    </>
  );
}

export default App;

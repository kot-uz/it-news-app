import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage';
import Navigation  from './components/Navigation';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>

      <Navigation/>
        <Routes>
          <Route  path="/" element={<HomePage/>}/>
          <Route path="/news/add" element={<FavouritesPage />} />
        </Routes>

    </>
  );
}

export default App;

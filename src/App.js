import './App.css';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Home from './pages/Home';
import BeerProvider from './contexts/BeerContext';

import HeaderComponent from './components/Header';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <BeerProvider>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route element={<HeaderComponent/>}>
            <Route path="/beers" element={<Beers/>}/>
            <Route path="/beers/:beerId" element={<SingleBeer/>}/>
            <Route path="/random-beer" element={<RandomBeer/>}/>
            <Route path="/new-beer" element={<NewBeer/>}/>
          </Route>
        </Routes>
      </Container>
    </BeerProvider>
  );
}

export default App;

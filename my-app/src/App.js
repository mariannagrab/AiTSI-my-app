import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Omnie from './components/Omnie&Ostronie/Omnie';
import Galeria from './components/Galeria/Galeria';
import Footer from './components/Footer/Footer';
import Ostronie from './components/Omnie&Ostronie/Ostronie';
import DodajKomentarz from './components/DodajKomentarz/DodajKomentarz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (<div className="App">
    <BrowserRouter>  
    <Navbar></Navbar>  
      <main>
        <article>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/omnie' element={<Omnie />} />
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/ostronie' element={<Ostronie />} />
            <Route path='/dodajkomentarz' element={<DodajKomentarz />} />
          </Routes>
        </article>
      </main>
    </BrowserRouter>
    <Footer></Footer>
  </div>
  );
}

export default App;

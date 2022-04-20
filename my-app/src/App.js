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
            <Route path='/AiTSI-my-app' exact element={<Home />} />
            <Route path='/AiTSI-my-app/home' element={<Home />} />
            <Route path='/AiTSI-my-app/omnie' element={<Omnie />} />
            <Route path='/AiTSI-my-app/galeria' element={<Galeria />} />
            <Route path='/AiTSI-my-app/ostronie' element={<Ostronie />} />
            <Route path='/AiTSI-my-app/dodajkomentarz' element={<DodajKomentarz />} />
          </Routes>
        </article>
      </main>
    </BrowserRouter>
    <Footer></Footer>
  </div>
  );
}

export default App;

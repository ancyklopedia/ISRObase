import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CentrePage from './components/CentrePage/CentrePage';
import ContactPage from './components/ContactPage/ContactPage';
import HomePage from './components/HomePage/HomePage';
import LauncherPage from './components/LauncherPage/LauncherPage';
import Footer from './components/Navbar/Footer';
import Navbar from './components/Navbar/Navbar';
import SatellitePage from './components/SatellitePage/SatellitePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* TU KOMPONENTY KTORE MAJA SIE WYSWIETLAC CALY CZAS */}
        <Navbar />
        {/* ------- */}
        {/* TU KOMPONENTY KTORE BEDA SIE POJAWIAC I ZNIKAC (PODSTRONY KTORE BEDA SIE PRZELACZAC) */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/centres" element={<CentrePage/>}/>
          <Route path="/launchers" element={<LauncherPage/>}/>
          <Route path="/satellites" element={<SatellitePage/>}/>
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
        {/* ------- */}
        {/* TU PONIZEJ ZNOW KOMPONENTY KTORE MAJA SIE WYSWIETLAC CALY CZAS, TU NP. FOOTER */}
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage />
          }
        />
        <Route
          path="/gallery"
          element={
            <GalleryPage />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage />
          }
        />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;

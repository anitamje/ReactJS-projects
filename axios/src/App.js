import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import SneakersPage from './Pages/SneakersPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sneakers" element={<SneakersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

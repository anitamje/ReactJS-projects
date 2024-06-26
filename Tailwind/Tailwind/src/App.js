import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Products from './Context/Products';

function App(props) {
  return (
    <BrowserRouter>
      <Products>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Products>
    </BrowserRouter>
  );
}

export default App;

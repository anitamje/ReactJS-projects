import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import SneakersPage from './Pages/SneakersPage';
import ProductsPage from './Pages/ProductsPage';
import SingleProducts from './Pages/SingleProducts';
import Products from './Context/Products';
import PrivateRoutes from './Components/PrivateRoutes';
import Dashboard from './Components/Dashboard';

function App(props) {
  return (
    <BrowserRouter>
      <Products>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sneakers" element={<SneakersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:idja" element={<SingleProducts />} />
          <Route path="/dashboard" element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          } />
        </Routes>
      </Products>
    </BrowserRouter>
  );
}

export default App;

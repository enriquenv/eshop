import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import CartPage from './pages/CartPage/CartPage';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/category/:baseName" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

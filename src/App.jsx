import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import ProductsProvider from './context/ProductsProvider';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import CartPage from './pages/CartPage/CartPage';


export default function App() {
  return (
    <>
    <CartProvider>
      <ProductsProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/category/:baseName" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductsProvider>
    </CartProvider>
    </>
  );
}
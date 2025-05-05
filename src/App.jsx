import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './Pages/Cart';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404';

export default function App() {
  const location = useLocation();


  const is404 = location.pathname !== '/' && location.pathname !== '/products' && location.pathname !== '/cart' && !location.pathname.includes('/category/');

  return (
    <div>
      
      {!is404 && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Categories />} />
        
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

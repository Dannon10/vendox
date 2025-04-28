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

  // We check if the current route is valid or a 404 route
  const is404 = location.pathname !== '/' && location.pathname !== '/products' && location.pathname !== '/cart' && !location.pathname.includes('/category/');

  return (
    <div>
      {/* Render the header only if it's not the 404 page */}
      {!is404 && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Categories />} />
        
        {/* Catch-all route for any unmatched paths */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

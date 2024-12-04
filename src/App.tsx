// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/green-tea" element={<ProductListPage />} />
        <Route path="/black-tea" element={<ProductListPage />} />
        <Route path="/white-tea" element={<ProductListPage />} />
        <Route path="/oolong-tea" element={<ProductListPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
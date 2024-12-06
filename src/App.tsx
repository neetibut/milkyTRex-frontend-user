// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Loading from './pages/Loading';
import ProductListPage from './pages/ProductListPage';
// import ProductDetailPage from './pages/ProductDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/products" element={<ProductListPage />} />
        {/* <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/green-tea" element={<ProductListPage />} />
        <Route path="/black-tea" element={<ProductListPage />} />
        <Route path="/white-tea" element={<ProductListPage />} />
        <Route path="/oolong-tea" element={<ProductListPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
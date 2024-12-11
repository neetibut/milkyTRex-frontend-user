
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Loading from './pages/Loading';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BlogPage from './pages/BlogPage';
import Article from './components/Article';

// import Tea from './pages/Tea';
// import PaymentPopup from './pages/PaymentPopup';
// import Shopchoice from './components/Shopchoice';
// import ProductDetailPage from './pages/ProductDetailPage';

const App: React.FC = () => {
  const handleLogin = (credentials: { email: string; password: string }) => {
    console.log("Logging in with:", credentials);
    // ทำการล็อกอินที่นี่
  };

  const handleSignUp = (userData: { username: string; email: string; password: string }) => {
    console.log("Signing up with:", userData);
    // ทำการสมัครสมาชิกที่นี่
  };

  return (
    <Router>
      <Navbar />
      <div className="content" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignUp={handleSignUp} />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/green-tea" element={<ProductListPage />} />
          <Route path="/black-tea" element={<ProductListPage />} />
          <Route path="/white-tea" element={<ProductListPage />} />
          <Route path="/oolong-tea" element={<ProductListPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;



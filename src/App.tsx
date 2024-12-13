// src/App.tsx
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import BlogPage from "./pages/BlogPage";
import Article from "./components/Article";
import Checkout from "./pages/CheckoutPage.tsx";
import CustomProduct from "./pages/CustomProduct";
import CartButton from "./components/CartButton";
import { CartItem } from "./components/ProductCart"; // นำเข้า CartItem เพื่อใช้ในการกำหนด type ของ cartItems

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // สร้าง useState สำหรับ cartItems

  return (
    <Router>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <div
        className="content"
        style={{ paddingTop: "100px", paddingBottom: "30px" }}
      >
        {/* ส่ง cartItems และ setCartItems ไปยัง CartButton */}
        <CartButton cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/custom-product" element={<CustomProduct />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/green-tea" element={<ProductListPage />} />
          <Route path="/black-tea" element={<ProductListPage />} />
          <Route path="/white-tea" element={<ProductListPage />} />
          <Route path="/oolong-tea" element={<ProductListPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

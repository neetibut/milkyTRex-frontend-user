import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import BlogPage from "./pages/BlogPage";
import Article from "./components/Article";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div
        className="content"
        style={{ paddingTop: "100px", paddingBottom: "30px" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
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

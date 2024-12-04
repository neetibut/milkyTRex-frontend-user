
import './App.css'
// import Navbar from './components/Navbar'

// import Shopchoice from './components/Shopchoice'


// import Home from "./pages/Home";
// import Footer from "./components/Footer";
// import AboutTea from "./components/AboutTea";
// import Review from './components/Review';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import Article from './components/Article'; 






export default function App() {
  return (
    <>
      {/* <Navbar />
      <Home />
      <Review />
      <AboutTea /> */}
      {/* <Shopchoice /> */}
      {/* <Footer /> */}
      <Router>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
    </>
    )
}

import './App.css'
import Navbar from './components/Navbar'

import Shopchoice from './components/Shopchoice'

import Carousel from './components/Carousel'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutTea from "./components/AboutTea";
import Review from './components/Review';
import  { BrowserRouter } from 'react-router-dom';




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <AboutTea />
      <Footer />
      <Review />
      
     
    
    <Shopchoice />
    </BrowserRouter>
      
  
  )
}
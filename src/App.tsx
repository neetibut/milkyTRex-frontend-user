
import './App.css'
import Review from './components/Review'
import Navbar from './components/Navbar'

import Shopchoice from './components/Shopchoice'


import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutTea from "./components/AboutTea";





export default function App() {
  return (
    <>
    <Navbar />
    <Home />
    <AboutTea />
    <Footer />
    <Shopchoice/>
    <Review/>
  </>
  )
}
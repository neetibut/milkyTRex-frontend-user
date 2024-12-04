
import './App.css'
import Navbar from './components/Navbar'

import Shopchoice from './components/Shopchoice'


import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutTea from "./components/AboutTea";
import Review from './components/Review';







export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Review />
      <AboutTea />
      <Shopchoice />
      <Footer />
    </>
    )
}
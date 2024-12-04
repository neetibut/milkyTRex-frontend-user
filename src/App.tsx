import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Review from './components/Review'
import Start from './pages/Start'
import Navbar from './components/Navbar'
import Shopchoice from './components/Shopchoice'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutTea from "./components/AboutTea";
import Loading from "./components/Loading";
import Selecctness from "./components/Selectness";
import Selecct from "./components/Select";
import RatingPage from "./components/Ratings";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Home />
      <Start />
      <Review />
      <AboutTea />
      <Shopchoice /> */}
      <Selecctness />
      <Selecct />
      <Loading />
      <RatingPage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
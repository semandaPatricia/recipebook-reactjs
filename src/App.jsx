
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import About  from "./pages/about/index";
import  Blog  from "./pages/blog/index";
import  Contact  from "./pages/contact/index";
//import ActiveSlider from "./components/ActiveSlider";
//import AquaticAnimals from "./components/Example"
import EmblaCarousel from './components/EmblaCarousel'

import './styles/base.css'
import './styles/embla.module.css'
import './styles/embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function App() {
  return (
    <>
      <Router>
        <NavBar />
        
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
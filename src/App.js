import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Particles from "./Components/ParticlesBackground";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
// import Technologies from "./Pages/Technologies";
function App() {
  return (
    <Router>
      <Header />
      <Particles />
      <AnimatedCursor 
        innerSize={8}
        outerSize={35}
        color='57, 122, 227'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={5}
        clickables={['a', 'button', 'input', 'textarea', 'select', '.clickable']}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/technologies" element={<Technologies />} /> */}
      </Routes>
    </Router>
  );
}
export default App;

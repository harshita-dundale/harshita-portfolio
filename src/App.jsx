import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import About from './components/about/About'
import Home from './components/home/Home'
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

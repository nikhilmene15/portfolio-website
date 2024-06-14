import "@fontsource/syne"; // Defaults to weight 400
import "@fontsource/syne/400.css"; // Specify weight
import './App.css';
import Header from './header/Header';
import HeroSection from './heroSection/HeroSection';
import SparkleAnimation from "./SparkleAnimation";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import Contact from "./contacts/Contact";

function App() {
  
  return (
    <>
    <SparkleAnimation />
    <Header />
    <HeroSection />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />

    <Footer />
    
    </>
  
  );
}

export default App;

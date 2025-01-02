import './App.css';
import Navbar from './components/Navbar';
import WelcomeBanner from './components/WelcomeBanner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <WelcomeBanner/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

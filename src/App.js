import './App.css';
import Navbar from './components/Navbar';
import WelcomeBanner from './components/WelcomeBanner';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <WelcomeBanner/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;

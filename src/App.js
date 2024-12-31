import './App.css';
import Navbar from './components/Navbar';
import WelcomeBanner from './components/WelcomeBanner';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar/>
      <WelcomeBanner/>
      <About/>
    </div>
  );
}

export default App;

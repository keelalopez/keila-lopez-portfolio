import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Certificates from './Components/Certificates'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <About />
        <Projects />
        <Certificates />
      </div>
    </>
  );
}

export default App;

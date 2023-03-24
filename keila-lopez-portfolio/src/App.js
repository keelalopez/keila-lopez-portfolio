import './App.css';
import Header from './Components/Header'
import Cover from './Components/Cover'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Certificates from './Components/Certificates'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Cover />
        <About />
        <Projects />
        <Skills />
        <Certificates />
      </div>
    </>
  );
}

export default App;

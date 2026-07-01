import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <p>Welcome to my portfolio</p>
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>

      <Footer />
    </>
  );
}

export default App;

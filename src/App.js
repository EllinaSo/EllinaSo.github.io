import About from './components/About';
import Home from './components/Home';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App bg-slate-50 overflow-hidden">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

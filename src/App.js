import Home from './components/Home';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App background-slate-50 overflow-hidden">
      <NavBar />
      <Home />
      <Experience />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

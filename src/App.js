import Home from './components/Home';
import Experience from './components/Experience';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App background-slate-50 overflow-hidden">
      <NavBar />
      <Home />
      <Experience />
    </div>
  );
}

export default App;

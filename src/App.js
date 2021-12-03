import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './components/AboutUs';
import Chat from './components/Chat';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Chat />
      <AboutUs />
    </div>
  );
}

export default App;

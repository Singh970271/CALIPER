import logo from './logo.svg';
import './App.css';
import { MainRoute } from './router/Mainroute';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <MainRoute/>
    </div>
  );
}

export default App;

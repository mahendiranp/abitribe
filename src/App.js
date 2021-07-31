import logo from './logo.svg';
import './App.css';

import 'boxicons';

import Home from "./views/Home";
import About from "./views/About";
import Selectives from "./views/Selectives";
import Gallery from "./views/Gallery"
import Psychology from "./views/Psychology"
import Header from "./components/Header"
import Contact from "./views/Contact"
function App() {
  return (
    <div className="App">
      <Header/>
      <div id="main">
        <Home/>
        <About/>
        <Selectives />
        <Gallery />
        <Psychology />
        <Contact />
      </div>
    </div>
  );
}

export default App;

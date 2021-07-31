import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import 'boxicons';

import AOS from "aos";
import "aos/dist/aos.css";


import Home from "./views/Home";
import About from "./views/About";
import Selectives from "./views/Selectives";
import Gallery from "./views/Gallery"
import Psychology from "./views/Psychology"
import Header from "./components/Header"
import Contact from "./views/Contact"
import "@fancyapps/ui/dist/fancybox.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
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

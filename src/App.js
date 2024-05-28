import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  const [tooltipTitle,setTooltipTitle] = useState('Switch to Dark Mode')
  
  function switchMode(e){
    let mode = e.target.checked ? 'dark-mode' : 'light-mode'
    e.target.checked ? setTooltipTitle('Switch to Light Mode') : setTooltipTitle('Switch to Dark Mode')
    document.querySelector('body').removeAttribute('class')
    document.querySelector('body').classList.add(mode)
    return mode
  }

  return (
    <div className="app-wrapper">
      <div>
        <Header switchMode={switchMode} tooltipTitle={tooltipTitle}></Header>
        <div className="container">
          <Hero></Hero>
          <Skills></Skills>
          <Experience></Experience>
        </div>
        <About/>
        <div className='container'>
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

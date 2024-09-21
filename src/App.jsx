import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Sobre from './components/Sobre/Sobre';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import './index.css'; 

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;

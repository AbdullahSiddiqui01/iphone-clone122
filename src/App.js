// src/App.js
import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;

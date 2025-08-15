import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Gallery />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
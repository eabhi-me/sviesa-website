import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Events from './components/Events';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Gallery />
      <InstagramFeed />
      <Events />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

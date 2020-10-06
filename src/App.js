import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Interests from './components/Interests';
import Picture from './components/Picture';
import Skills from './components/Skills';
import Links from './components/Links';
import Counter from './components/Counter';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Intro />
      <Interests />
      <p>Here is a random image from unsplash</p>
      <Picture />
      <Skills />
      <Links />
      <p>
        Here is a little counter to play with()
      </p>
      <Counter />
      <ScrollToTop />
      <Footer />



    </div>
  );
}

export default App;

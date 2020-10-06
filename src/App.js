import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Interests from './components/Interests';
import Picture from './components/Picture';
import Skills from './components/Skills';
import Links from './components/Links';
import Counter from './components/Counter';

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
        Here is a little counter to play with
      </p>
      <Counter />

    </div>
  );
}

export default App;

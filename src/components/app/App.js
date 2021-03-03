import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../header/Header';
import Main from '../main/Main';
import About from '../about/About';
import Skills from '../skills/Skills';
import Works from '../works/Works';
import ParticlesBackground from '../common/particles/Particles'

import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
      </Switch>
      <ParticlesBackground />
    </div>
  );
}

export default App;

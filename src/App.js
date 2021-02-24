import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import First from "./first.js";

function App() {
  //<Route />의 의미는 path로 가면 About component를 보여준다.
  return (
  <HashRouter>
    <Navigation/>
    <Route path="/" component={Home} exact = {true}></Route>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component= {Detail}/>
    <Route path="/first" component= {First}/>
  </HashRouter>
  )
}

export default App;
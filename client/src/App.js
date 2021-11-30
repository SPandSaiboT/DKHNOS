
import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Route exact path = "/" component={Landing}/>
     <Route path = "/home" component={Home}/>
    </div>
  );
}

export default App;

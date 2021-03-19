
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from "./components/Home"
import Info from "./components/Info"
import Hilfe from "./components/Hilfe"
import Prüfung from "./components/Prüfung"
import Navbar from "./components/Navbar"
import NichtGefunden from './components/NichtGefunden';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path='/'> <Home /></Route>
          <Route path='/Info'><Info /></Route>
          <Route path='/Hilfe'><Hilfe /></Route>
          <Route path="/Prüfung"><Prüfung /></Route>
          <Route path='*'> <NichtGefunden /> </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
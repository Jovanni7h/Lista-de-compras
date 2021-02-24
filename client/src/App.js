import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navigation from './components/Navigation'
import Home from './pages/Home'
import NotesList from './components/NotesList'
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <Navigation />
   
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={NotesList} />
          <Route exact path="/edit/:id" component={CreateNote} />
          <Route exact path="/create" component={CreateNote} />
          <Route exact path="/user" component={CreateUser} />
        </Switch>
   
    </Router>
  );
}

export default App;

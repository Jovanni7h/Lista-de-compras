import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container pt-4">
        <Switch>
          <Route exact path="/" component={NotesList} />
          <Route exact path="/edit/:id" component={CreateNote} />
          <Route exact path="/create" component={CreateNote} />
          <Route exact path="/user" component={CreateUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

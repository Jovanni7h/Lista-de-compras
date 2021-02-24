import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles/Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Crear Note
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  Crear Usuario
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

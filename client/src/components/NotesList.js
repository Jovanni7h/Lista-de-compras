import axios from "axios";
import React, { Component } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default class NotesList extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    this.getNotes();
  }

  async getNotes() {
    const res = await axios.get("http://localhost:4000/api/notes");
    this.setState({
      notes: res.data,
    });
  }

  deleteNote = async (id) => {
    await axios.delete("http://localhost:4000/api/notes/" + id);
    this.getNotes();
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.notes.map((note) => (
            <div key={note._id} className="col-md-4 p-2">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5 className="text-success">{note.title}</h5>
                  <Link className="btn btn-info" to={"/edit/" + note._id}>
                    Editar
                  </Link>
                </div>
                <div className="card-body">
                  <p>
                    <strong>Contenido:</strong> {note.content}
                  </p>
                  <p>
                    <strong>Autor: </strong>
                    {note.author}
                  </p>
                  <p>
                    <strong>Fecha:</strong> {format(note.date)}
                  </p>

                  <small>
                    <strong>Creacion:</strong> {format(note.createdAt)}
                  </small>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteNote(note._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      //libreria TIMEAGO JS
    );
  }
}

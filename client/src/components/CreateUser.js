import React, { Component } from "react";
import axios from "axios";

import './styles/CreateUser.css'

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  componentDidMount() {
    //Axios es para hacer la peticion GET y obtener los usuarios
    this.getUsers();
    console.log(this.state.users);
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
  };

  onChangeUserName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = async (e) => {
    //Cancelar el conportamiento por defecto del form
    e.preventDefault();
    // Mandar los datos con el metodo POST de Axios
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    this.getUsers();
    this.setState({ username: "" });
  };

  deleteUser = async (id) => {
    await axios.delete("http://localhost:4000/api/users/" + id);
    this.getUsers();
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-4">
            <div className="card card-body">
              <h3>Create New User</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="floatingInput"
                    placeholder="Nombre"
                    value={this.state.username}
                    onChange={this.onChangeUserName}
                  />
                  <button
                    type="submit"
                    className="btn btn-block btn-outline-info mt-2"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <ul className="list-group">
              {this.state.users.map((user) => (
                <li
                  className="list-group-item d-flex justify-content-between "
                  key={user._id}
                >
                  {user.username}
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// Se instalo:
// npm install axios

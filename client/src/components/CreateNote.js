import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    editing: false,
    _id: "",
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data.map((user) => user.username),
      userSelected: res.data[0].username,
    });
    if (this.props.match.params.id) {
      const res = await axios.get(
        "http://localhost:4000/api/notes/" + this.props.match.params.id
      );
      console.log(res.data);
      this.setState({
        title: res.data.title,
        content: res.data.content,
        date: new Date(res.data.date),
        userSelected: res.data.author,
        editing: true,
        _id: this.props.match.params.id,
      });
    }
  }

  sendForm = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };
    if (this.state.editing) {
      await axios.put(
        "http://localhost:4000/api/notes/" + this.state._id,
        newNote
      );
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
    }
    //Para hacer una redireccion
    window.location.href = "/";
  };

  // onImputChange = e => {
  //   this.setState({
  //     userSelected: e.target.value
  //   })
  // }
  onImputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({ date: date });
  };

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card card-body">
              <h4>Create a Note</h4>
              {/*SELECT USER*/}
              <div className="form-group">
                <select
                  className="form-control"
                  name="userSelected"
                  onChange={this.onImputChange}
                  value={this.state.userSelected}
                >
                  {this.state.users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onImputChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="Content"
                  value={this.state.content}
                  onChange={this.onImputChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <DatePicker
                  className="form-control"
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>

              <form onSubmit={this.sendForm}>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

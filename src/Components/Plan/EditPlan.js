import React, { Component } from "react";
import axios from "axios";

export default class EditPlan extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: String,
      description: String,
      start: { type: Date },
      end: { type: Date}
  };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Plan/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          description: response.data.description,
          start: response.data.start,
          end: response.data.end
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeStart(e) {
    this.setState({
      start: e.target.value
    });
  }
  onChangeEnd(e) {
    this.setState({
      end: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      description: this.state.description,
      start: this.state.start,
      end: this.state.end
    };
    console.log(obj)
    axios
      .put(
        "http://localhost:4000/Plan/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));
      window.location.href="http://localhost:3000/list"
      alert("Appointment update successfull")
  }

  render() {
    return (
      <div>
        <h3>Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Date & Time Start: </label>
            <input
              type="datetime"
              data-date="" 
              data-date-format="YYYY MMMM DD"
              className="form-control"
              value={this.state.start}
              onChange={this.onChangeStart}
            />
          </div>
          <div className="form-group">
            <label>Date & Time End: </label>
            <input
              type="datetime"
              className="form-control"
              value={this.state.end}
              onChange={this.onChangeEnd}
            />
          </div>
          <div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Plan"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

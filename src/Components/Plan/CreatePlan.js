import React, { Component } from "react";
import axios from 'axios';

export default class CreatePlan extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        title: String,
        start: { type: Date, default: new Date() },
        end: {type: Date, default: new Date()},
        id: Math.floor(Math.random()*1000)
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeStart(e) {
    this.setState({
        start: e.target.value
    });
  }
  onChangeEnd(e){
    this.setState({
      end: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Title: ${this.state.title}`);
    console.log(`Start: ${this.state.start}`);
    console.log(`End: ${this.state.end}`);
  

    const newPlan = {
     title: this.state.title,
      start: this.state.start,
      end: this.state.end
    }

    axios.post('http://localhost:4000/Plan/add', newPlan)
    .then(res =>{
      console.log(res.data)
    });
    this.props.history.push("/");

    this.setState({
      title: "",
      start: "",
      end: "",
      id: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
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
            <label>Date & Time Start: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.start}
              onChange={this.onChangeStart}
            />
          </div>
          <div className="form-group">
            <label>Date & Time End: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.end}
              onChange={this.onChangeEnd}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

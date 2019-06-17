import React, { Component } from "react";
import axios from 'axios';
import pic1 from './Boomerly.jpg'
import pic2 from './download.jpg'
import pic3 from './carepic.jpg'
import pic4 from './care.jpg'
// import pic5 from './images.jpg'

export default class CreatePlan extends Component {
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
  onChangeEnd(e){
    this.setState({
      end: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Title: ${this.state.title}`);
    console.log(`Description: ${this.state.description}`);
    console.log(`Start: ${this.state.start}`);
    console.log(`End: ${this.state.end}`);
  

    const newPlan = {
    title: this.state.title,
    description: this.state.description,
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
      description: "",
      start: "",
      end: "",
      id: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New appointment</h3>
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
              type="datetime-local"
              className="form-control"
              value={this.state.start.toISOstring}
              onChange={this.onChangeStart}
            />
          </div>
          <div className="form-group">
            <label>Date & Time End: </label>
            <input
              type="datetime-local"
              className="form-control"
              value={this.state.end.toISOstring}
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
        <img src={pic1} alt="" className="pic1"/>
        <img src={pic2} alt="" className="pic2"/>
        <img src={pic3} alt="" className="pic3"/>
        <img src={pic4} alt="" className="pic4"/>
        {/* <img src={pic5} alt="" className="pic5"/> */}
      </div>
     
      
    );
  }
}

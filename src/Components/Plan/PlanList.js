import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "./Modelfoto.jpg";
import img2 from "./slider1.jpg";

const Plan = props => (
  <tr>
    <td>{props.plan.title}</td>
    <td>{props.plan.description}</td>
    <td>{props.plan.start}</td>
    <td>
      {props.plan.end}
      <Link to={"/edit/" + props.plan._id}> Edit </Link>
      <span> || </span>
      <Link to={"/delete/" + props.plan._id}> Delete </Link>
    </td>
  </tr>
);

export default class PlanList extends Component {
  constructor(props) {
    super(props);
    this.state = { plans: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Plan/")
      .then(response => {
        this.setState({ plans: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  planList() {
    return this.state.plans.map(function(currentPlan, i) {
      return <Plan plan={currentPlan} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date Start:</th>
              <th>Date End:</th>
            </tr>
          </thead>
          <tbody>{this.planList()}</tbody>
        </table>
        <img src={img2} alt="img2" className="img2" />
        <img src={img1} alt="img1" className="img1" />
      </div>
    );
  }
}

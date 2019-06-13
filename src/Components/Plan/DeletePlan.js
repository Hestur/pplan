import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeletePlan extends React.Component {
    constructor(props) {
        super(props);
        this.deletePlan = this.deletePlan.bind(this);
    }
    deletePlan() {
        axios.delete('http://localhost:4000/Plan/delete/'+this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            this.props.history.push("/");
    }
render(){
    return(
        <div>
            <Link to={"/edit/"+this.props.match.params.id} className="btn btn-primary">Edit</Link>
         
            <button onClick={this.deletePlan} className="btn btn-danger">Delete</button>
            </div>
    )
}
}



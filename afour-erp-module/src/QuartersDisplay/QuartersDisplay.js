import React, {Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import Collapsible from "react-collapsible";
import IndividualDisplay from '../IndividualDisplay/IndividualDisplay';

class QuartersDisplay extends Component {
    state = {
        allQuarters: []
    }

    //changed to componentDidMount instead of ComponentDidUpdate
    //not updating now, instead it is added/removed from the DOM
    componentDidMount () {
        if(this.props.match.params.eachId){
            if(!this.state.allQuarters || (this.state.allQuarters && this.state.allQuarters.employee_id !== this.props.match.params.eachId)) {
                axios.get("http://localhost:8000/api/quarterlyreview?employee_id=" + this.props.match.params.eachId) //https://jsonplaceholder.typicode.com/users/
                    .then((response) => {
                        this.setState({allQuarters: response.data});
                    });
            }
        }
    }

    render() {
        const style = {
            backgroundColor: "lavender",
            border: "2px solid lightgray",
            width: "auto",
            height: "auto",
            clear: "both",
            color: "#333333",
            cursor: "pointer",
            fontWeight: "normal"
        };

        const eachQuarter = this.state.allQuarters.map((each) => {

            const avgQuarterRating = parseFloat(parseInt(each.manager_hard_skills_ratings) + parseInt(each.manager_soft_skills_ratings) + parseInt(each.manager_value_addition_ratings) + parseInt(each.manager_up_learning_ratings))/4; 
      
            return (
                <Collapsible key = {each.employee_id} trigger = {
                    <div style = {style} className = "row">
                        <p className = "column">{each.qms_id}</p>
                        <p className = "column">{each.first_name + " " + each.last_name}</p>
                        <p className = "column">{avgQuarterRating}</p>
                    </div>
                }>
                    <h1>Collapsible! Third view comes here</h1>
                    <IndividualDisplay/>
                </Collapsible>
            )
        });

        if (this.props.match.params.eachId && this.state.allQuarters) {
            
            return(

                <div>
                    <br/>
                    <button><Link to = "/list-employees">⇐ Default COE view</Link></button>
                    <div className = "row">
                        <div className="column">Quarter</div>
                        <div className="column">Name</div>
                        <div className="column">Rating</div>
                        <div className="column" style = {{textDecoration: "underline", fontWeight: "lighter"}}>Avg Rating: {this.state.allQuarters.workflow_status}</div>
                    </div>
                    <br/>
                    <br/>
                    {eachQuarter}
                </div>
            );
        }

        return null;
    }
}

export default QuartersDisplay;
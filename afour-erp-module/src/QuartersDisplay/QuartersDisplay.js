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

        let avgOverallRating = [0, 0];

        const eachQuarter = this.state.allQuarters.map((each) => {

            const avgQuarterRating = parseFloat(parseInt(each.manager_hard_skills_ratings) + parseInt(each.manager_soft_skills_ratings) + parseInt(each.manager_value_addition_ratings) + parseInt(each.manager_up_learning_ratings))/4; 
            avgOverallRating[0] += avgQuarterRating;
            avgOverallRating[1] ++;

            return (
                <Collapsible key = {each.employee_id} trigger = {
                    <div style = {style} className = "row">
                        <p className = "column">{each.qms_id.substring(4, 11) + "  " + each.qms_id.substring(12)}</p>
                        <p className = "column">{each.first_name + " " + each.last_name}</p>
                        <p className = "column">{avgQuarterRating}</p>
                    </div>
                }>
                    <h1>Collapsible! Third view comes here</h1>
                    <IndividualDisplay
                        softComments = {each.manager_soft_skills_comments}
                        hardComments = {each.manager_hard_skills_comments}
                        valueComments = {each.manager_value_addition_comments}
                        upComments = {each.manager_up_learning_comments}

                        softRatings = {each.manager_soft_skills_ratings}
                        hardRatings = {each.manager_hard_skills_ratings}
                        valueRatings = {each.manager_value_addition_ratings}
                        upRatings = {each.manager_up_learning_ratings}
                    />
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
                        <div className="column" style = {{textDecoration: "underline", color: "rgb(125, 125, 190)", border: "1.3px solid rgb(125, 125, 190)", padding: "9px", width: "130px",textDecoration: "bold", boxShadow: "-2px -2px 8px 2px lavender"}}>
                            Avg Rating: {avgOverallRating[0]/avgOverallRating[1]}
                        </div>
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
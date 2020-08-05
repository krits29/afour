import React, {Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import Collapsible from "react-collapsible";
import IndividualDisplay from '../IndividualDisplay/IndividualDisplay';

class QuartersDisplay extends Component {
    state = {
        allQuarters: null
    }

    //changed to componentDidMount instead of ComponentDidUpdate
    //not updating now, instead it is added/removed from the DOM
    componentDidMount () {
        if(this.props.match.params.eachId){
            if(!this.state.allQuarters || (this.state.allQuarters && this.state.allQuarters.id !== this.props.match.params.eachId)) {
                axios.get("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.eachId)
                    .then((response) => {
                        this.setState({allQuarters: response.data});
                    });
            }
        }
    }

    render() {
        if (this.props.match.params.eachId && this.state.allQuarters) {
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
            
            return(
                <div>
                    <br/>
                    <button><Link to = "/list-employees">⇐ Default COE view</Link></button>
                    <div className = "row">
                        <div className="column">Quarter</div>
                        <div className="column">Name</div>
                        <div className="column">Rating</div>
                        <div className="column" style = {{textDecoration: "underline", fontWeight: "lighter"}}>Avg Rating: {this.state.allQuarters.address.zipcode}</div>
                    </div>
                    <br/>
                    <br/>
                    <Collapsible trigger = {
                        <div style = {style} className = "row">
                            <p className = "column">{this.state.allQuarters.address.suite}</p>
                            <p className = "column">{this.state.allQuarters.name}</p>
                            <p className = "column">{this.state.allQuarters.address.zipcode}</p>
                        </div>
                    }>
                        <h1>Collapsible! Third view comes here</h1>
                        <IndividualDisplay/>
                    </Collapsible>
                    <Collapsible trigger = {
                        <div style = {style} className = "row">
                            <p className = "column">{this.state.allQuarters.address.suite}</p>
                            <p className = "column">{this.state.allQuarters.name}</p>
                            <p className = "column">{this.state.allQuarters.address.zipcode}</p>
                        </div>
                    }>
                        <h1>Collapsible! Third view comes here</h1>
                        <IndividualDisplay/>
                    </Collapsible>
                    <Collapsible trigger = {
                        <div style = {style} className = "row">
                            <p className = "column">{this.state.allQuarters.address.suite}</p>
                            <p className = "column">{this.state.allQuarters.name}</p>
                            <p className = "column">{this.state.allQuarters.address.zipcode}</p>
                        </div>
                    }>
                        <h1>Collapsible! Third view comes here</h1>
                        <IndividualDisplay/>
                    </Collapsible>
                    <Collapsible trigger = {
                        <div style = {style} className = "row">
                            <p className = "column">{this.state.allQuarters.address.suite}</p>
                            <p className = "column">{this.state.allQuarters.name}</p>
                            <p className = "column">{this.state.allQuarters.address.zipcode}</p>
                        </div>
                    }>
                        <h1>Collapsible! Third view comes here</h1>
                        <IndividualDisplay/>
                    </Collapsible>
                </div>
            );
        }

        return null;
    }
}

export default QuartersDisplay;
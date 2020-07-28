import React, {Component} from 'react';
import axios from "axios"

class QuartersDisplay extends Component {
    state = {
        allQuarters: null
    }

    componentDidUpdate () {
        if(this.props.id){
            if(!this.state.allQuarters || (this.state.allQuarters && this.state.allQuarters.id !== this.props.id)) {
                axios.get("https://jsonplaceholder.typicode.com/users/" + this.props.id)
                    .then((response) => {
                        this.setState({allQuarters: response.data});
                    });
            }
        }
    }

    render() {
        if (this.props.id && this.state.allQuarters) {
            const style = {
                backgroundColor: "lavender",
                border: "2px solid lavender",
                width: "auto",
                height: "auto",
                clear: "both",
                color: "#333333"
            };
            
            return(
                <div>
                    <div className = "row">
                        <div className="column">Quarter</div>
                        <div className="column">Name</div>
                        <div className="column">Rating</div>
                    </div>
                    <div>Avg Rating: {this.state.allQuarters.address.zipcode}</div>
                    <hr/>
                    <div style = {style}>
                        <p className = "column">{this.state.allQuarters.address.suite}</p>
                        <p className = "column">{this.state.allQuarters.name}</p>
                        <p className = "column">{this.state.allQuarters.address.zipcode}</p>
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default QuartersDisplay;